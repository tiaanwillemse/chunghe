
var websocket = require('websocket-stream');
var ws = websocket('ws://realtimecats.com')
ws.pipe(process.stdout);
