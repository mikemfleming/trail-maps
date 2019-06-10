provider "aws" {
  region = "us-east-1"
}

resource "aws_iam_role" "trail_maps_lambda" {
  name = "trail_maps_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_lambda_function" "trail-maps-email-handler" {
  filename      = "lambda.zip"
  function_name = "trail-maps-email-handler"
  role          = "${aws_iam_role.trail_maps_lambda.arn}"
  handler       = "exports.handleEmail"
  source_code_hash = "${filebase64sha256("lambda.zip")}"

  runtime = "nodejs10.x"
}