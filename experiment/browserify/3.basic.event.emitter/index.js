
// require the core node events module
var EventEmitter = require('events').EventEmitter;

//create a new event emitter
var emitter = new EventEmitter;

// set up a listener for the event
emitter.on('pizza', function(message){
  console.log(message);
});

// emit an event
emitter.emit('pizza', 'pizza is extremely yummy');


// using __dirname
console.log('__dirname', __dirname);


// using process.nextTick
process.nextTick(function () {
  console.log('next tick')
});

// check if is browser
console.log ('is running in browser?', process.browser);
