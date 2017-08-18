#!/bin/sh
FUNCTION_NAME=letterbox

OUTPUT=$(aws logs describe-log-streams \
--log-group-name /aws/lambda/$FUNCTION_NAME \
--order-by LastEventTime | node ./scripts/log.js)

echo $OUTPUT

aws logs get-log-events --log-group-name /aws/lambda/alexa_lambda --log-stream-name $OUTPUT
