#!/bin/sh

FUNCTION_NAME=alexa_lambda

aws lambda invoke \
  --invocation-type RequestResponse \
  --function-name $FUNCTION_NAME \
  --log-type Tail \
  outputfile.txt | node ./scripts/jq.js | base64 -D
