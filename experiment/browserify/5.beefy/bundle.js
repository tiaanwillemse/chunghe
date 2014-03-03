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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvdXNyL2xvY2FsL3NoYXJlL25wbS9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9jaHVuZ2hlL2Rldi9nb29nbGUuY29kZS9leHBlcmltZW50L2Jyb3dzZXJpZnkvMS5iYXNpYy9pbmRleC5qcyIsIi9Vc2Vycy9jaHVuZ2hlL2Rldi9nb29nbGUuY29kZS9leHBlcmltZW50L2Jyb3dzZXJpZnkvMS5iYXNpYy9tdWx0aXBseS5qcyIsIi9Vc2Vycy9jaHVuZ2hlL2Rldi9nb29nbGUuY29kZS9leHBlcmltZW50L2Jyb3dzZXJpZnkvMS5iYXNpYy9zcXVhcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuXG52YXIgc3F1YXJlID0gcmVxdWlyZSgnLi9zcXVhcmUnKTtcbmNvbnNvbGUubG9nKHNxdWFyZSgxMjUpKTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gYSAqIGI7XG59XG4iLCJcbnZhciBtdWx0aXBseSA9IHJlcXVpcmUoJy4vbXVsdGlwbHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gbXVsdGlwbHkobiwgbik7XG59XG4iXX0=
