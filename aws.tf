# Meta info about the deployment
provider "aws" {
  region = "us-east-1"
}

# Creates a role for the Lambda
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

# Attaches the above role to the Lambda
resource "aws_iam_role_policy_attachment" "trail_maps_lambda_log_policy_attachment" {
  role = "${aws_iam_role.trail_maps_lambda.name}"
  policy_arn = "${aws_iam_policy.trail_maps_log_policy.arn}"
}

# Creates the Lambda with the .zip from the lambda directory
resource "aws_lambda_function" "trail_maps_email_handler" {
  filename = "lambda.zip"
  function_name = "trail_maps_email_handler"
  role = "${aws_iam_role.trail_maps_lambda.arn}"
  handler = "exports.handleEmail"
  source_code_hash = "${filebase64sha256("lambda.zip")}"
  timeout = 10

  runtime = "nodejs10.x"
}

# Creates a role for the Lambda to write logs
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

# TODO: 
#   - Configure SES https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html
#       * with bucket and policy to write to it
#       * with sns topic
#   - Configure DynamoDB https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html
#       * with policy that allows queries from an ip 
#   - Trigger Lambda from that SNS topic to
#       * scan all the emails in that bucket (will need a policy for this)
#       * parse the emails into lat/lng and message
#       * write that data to DDB
