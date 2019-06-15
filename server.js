const express = require('express')
const next = require('next')
const ddb = require('./lambda/ddb');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

function transform (data) {
  const { Items } = data;

  return {
    waypoints: Items.map(item => ({
      ...item,
      text: item.text.S.split('\n\n'),
      lat: Number(item.lat.N),
      lng: Number(item.lng.N)
    }))
  };
}

app.prepare().then(() => {
  const server = express()

  server.get('/api/waypoints', (req, res) => {
    return ddb.getAll()
      .then((data) => res.json(transform(data)));
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})