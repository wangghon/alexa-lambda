#!/bin/sh

aws logs get-log-events --log-group-name /aws/lambda/letterbox --log-stream-name $1
