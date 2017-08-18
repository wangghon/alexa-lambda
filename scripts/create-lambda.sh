#!/bin/sh

FUNCTION_FILE=build/letterbox.zip
FUNCTION_NAME=letterbox

EXEC_ROLE='arn:aws:iam::967027571182:role/Alexa-lambda'

rm -Rf build/
mkdir build
rm -Rf node_modules/
npm install --production
zip -r $FUNCTION_FILE bin node_modules

aws lambda create-function \
  --function-name $FUNCTION_NAME \
  --runtime 'nodejs6.10' \
  --role $EXEC_ROLE \
  --handler bin/index.handler \
  --zip-file fileb://$FUNCTION_FILE \
  --timeout 30
