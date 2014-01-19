(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var square;

square = require('./square.coffee');

alert(square(65));


},{"./square.coffee":3}],2:[function(require,module,exports){


module.exports = function (m, n) {
  return m * n;
}

},{}],3:[function(require,module,exports){
var multiply;

multiply = require('./multiply');

module.exports = function(n) {
  return multiply(n, n);
};


},{"./multiply":2}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvdXNyL2xvY2FsL3NoYXJlL25wbS9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9jaHVuZ2hlL2Rldi9nb29nbGUuY29kZS9leHBlcmltZW50L2Jyb3dzZXJpZnkvNS5zb3VyY2UudHJhbnNmb3Jtcy5jb2ZmZWVpZnkvaW5kZXguY29mZmVlIiwiL1VzZXJzL2NodW5naGUvZGV2L2dvb2dsZS5jb2RlL2V4cGVyaW1lbnQvYnJvd3NlcmlmeS81LnNvdXJjZS50cmFuc2Zvcm1zLmNvZmZlZWlmeS9tdWx0aXBseS5qcyIsIi9Vc2Vycy9jaHVuZ2hlL2Rldi9nb29nbGUuY29kZS9leHBlcmltZW50L2Jyb3dzZXJpZnkvNS5zb3VyY2UudHJhbnNmb3Jtcy5jb2ZmZWVpZnkvc3F1YXJlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0dBLElBQUEsRUFBQTs7QUFBQSxDQUFBLEVBQVMsR0FBVCxDQUFTLFVBQUE7O0FBQ1QsQ0FEQSxDQUNNLEdBQU4sQ0FBTTs7OztBQ0pOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQSxJQUFBLElBQUE7O0FBQUEsQ0FBQSxFQUFXLElBQUEsQ0FBWCxJQUFXOztBQUNYLENBREEsRUFDaUIsR0FBWCxDQUFOLEVBQWtCO0NBQ2hCLENBQW1CLE1BQVosQ0FBQTtDQURRIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcblxuXG5zcXVhcmUgPSByZXF1aXJlKCcuL3NxdWFyZS5jb2ZmZWUnKVxuYWxlcnQgc3F1YXJlKDY1KVxuIiwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG0sIG4pIHtcbiAgcmV0dXJuIG0gKiBuO1xufVxuIiwiXG5cbm11bHRpcGx5ID0gcmVxdWlyZSAnLi9tdWx0aXBseSdcbm1vZHVsZS5leHBvcnRzID0gKG4pIC0+XG4gIHJldHVybiBtdWx0aXBseShuLCBuKVxuXG4iXX0=
