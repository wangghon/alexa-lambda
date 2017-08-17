#!/usr/bin/env node

// Reads JSON from stdin and writes equivalent
// nicely-formatted JSON to stdout.

var stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
});

stdin.on('end', function () {
    var inputJSON = inputChunks.join();

    inputJSON = inputJSON.replace(/,,/g , ",");
    inputJSON = inputJSON.replace(/,:/g , ":");
    var parsedData = JSON.parse(inputJSON);

    var length = parsedData.logStreams.length;
    var stream = parsedData.logStreams[length-1].logStreamName;

    stdout.write(stream);
});
