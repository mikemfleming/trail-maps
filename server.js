const express = require('express')
const next = require('next')
const ddb = require('./lambda/ddb');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/api/waypoints', (req, res) => {
    return ddb.getAll()
      .then(({ Items }) => {
        Items = Items.map(item => ({
          ...item,
          lat: Number(item.lat.S),
          lng: Number(item.lng.S)
        }));
        
        return res.json({ waypoints: Items})
      });
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})