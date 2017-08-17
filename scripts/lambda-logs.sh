#!/bin/sh

aws logs get-log-events --log-group-name /aws/lambda/alexa_lambda --log-stream-name $1
