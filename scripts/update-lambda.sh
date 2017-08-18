#!/bin/sh


FUNCTION_FILE=build/letterbox.zip
FUNCTION_NAME=letterbox

rm -Rf build/
mkdir build
rm -Rf node_modules/
npm install --production
zip -r $FUNCTION_FILE bin node_modules

aws lambda update-function-code \
  --function-name $FUNCTION_NAME \
  --zip-file fileb://$FUNCTION_FILE
