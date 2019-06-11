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

resource "aws_iam_role_policy_attachment" "trail_maps_lambda_log_policy_attachment" {
  role = "${aws_iam_role.trail_maps_lambda.name}"
  policy_arn = "${aws_iam_policy.trail_maps_log_policy.arn}"
}

resource "aws_lambda_function" "trail_maps_email_handler" {
  filename = "lambda.zip"
  function_name = "trail_maps_email_handler"
  role = "${aws_iam_role.trail_maps_lambda.arn}"
  handler = "exports.handleEmail"
  source_code_hash = "${filebase64sha256("lambda.zip")}"

  runtime = "nodejs10.x"
}

resource "aws_iam_policy" "trail_maps_log_policy" {
  name = "trail_maps_log_policy"
  path = "/"
  description = "IAM policy for logging from trail maps lambda"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:CreateLogGroup"
      ],
      "Resource": "arn:aws:logs:*:*:*",
      "Effect": "Allow"
    }
  ]
}
EOF
}
