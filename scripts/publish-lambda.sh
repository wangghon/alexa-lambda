#!/bin/sh

FUNCTION_NAME=alexa_lambda

aws lambda publish-version \
  --function-name  $FUNCTION_NAME
