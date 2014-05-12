(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var square = require('./square');
console.log(square(125));

},{"./square":3}],2:[function(require,module,exports){

module.exports = function (a, b) {
  return a * b;
}

},{}],3:[function(require,module,exports){

var multiply = require('./multiply');

module.exports = function (n) {
  return multiply(n, n);
}

},{"./multiply":2}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2NodW5naG9mYW5nL2Rldi9jaHVuZ2hlL2V4cGVyaW1lbnQvYnJvd3NlcmlmeS8xLmJhc2ljL2luZGV4LmpzIiwiL1VzZXJzL2NodW5naG9mYW5nL2Rldi9jaHVuZ2hlL2V4cGVyaW1lbnQvYnJvd3NlcmlmeS8xLmJhc2ljL211bHRpcGx5LmpzIiwiL1VzZXJzL2NodW5naG9mYW5nL2Rldi9jaHVuZ2hlL2V4cGVyaW1lbnQvYnJvd3NlcmlmeS8xLmJhc2ljL3NxdWFyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5cbnZhciBzcXVhcmUgPSByZXF1aXJlKCcuL3NxdWFyZScpO1xuY29uc29sZS5sb2coc3F1YXJlKDEyNSkpO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBhICogYjtcbn1cbiIsIlxudmFyIG11bHRpcGx5ID0gcmVxdWlyZSgnLi9tdWx0aXBseScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBtdWx0aXBseShuLCBuKTtcbn1cbiJdfQ==
