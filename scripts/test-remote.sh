#!/bin/sh

FUNCTION_NAME=letterbox

aws lambda invoke \
  --invocation-type RequestResponse \
  --function-name $FUNCTION_NAME \
  --log-type Tail \
  --payload file://event.json \
  outputfile.txt | node ./scripts/jq.js | base64 -D
