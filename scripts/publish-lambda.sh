#!/bin/sh

FUNCTION_NAME=letterbox

aws lambda publish-version \
  --function-name  $FUNCTION_NAME
