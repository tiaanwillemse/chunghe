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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2NodW5naG9mYW5nL2Rldi9jaHVuZ2hlLmdvb2dsZS5jb2RlL2V4cGVyaW1lbnQvYnJvd3NlcmlmeS82LnNvdXJjZS50cmFuc2Zvcm1zLmNvZmZlZWlmeS9pbmRleC5jb2ZmZWUiLCIvVXNlcnMvY2h1bmdob2ZhbmcvZGV2L2NodW5naGUuZ29vZ2xlLmNvZGUvZXhwZXJpbWVudC9icm93c2VyaWZ5LzYuc291cmNlLnRyYW5zZm9ybXMuY29mZmVlaWZ5L211bHRpcGx5LmpzIiwiL1VzZXJzL2NodW5naG9mYW5nL2Rldi9jaHVuZ2hlLmdvb2dsZS5jb2RlL2V4cGVyaW1lbnQvYnJvd3NlcmlmeS82LnNvdXJjZS50cmFuc2Zvcm1zLmNvZmZlZWlmeS9zcXVhcmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDRUEsSUFBQSxNQUFBOztBQUFBLE1BQUEsR0FBUyxPQUFBLENBQVEsaUJBQVIsQ0FBVCxDQUFBOztBQUFBLEtBQ0EsQ0FBTSxNQUFBLENBQU8sRUFBUCxDQUFOLENBREEsQ0FBQTs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQSxJQUFBLFFBQUE7O0FBQUEsUUFBQSxHQUFXLE9BQUEsQ0FBUSxZQUFSLENBQVgsQ0FBQTs7QUFBQSxNQUNNLENBQUMsT0FBUCxHQUFpQixTQUFDLENBQUQsR0FBQTtBQUNmLFNBQU8sUUFBQSxDQUFTLENBQVQsRUFBWSxDQUFaLENBQVAsQ0FEZTtBQUFBLENBRGpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuXG5zcXVhcmUgPSByZXF1aXJlKCcuL3NxdWFyZS5jb2ZmZWUnKVxuYWxlcnQgc3F1YXJlKDY1KVxuIiwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG0sIG4pIHtcbiAgcmV0dXJuIG0gKiBuO1xufVxuIiwiXG5cbm11bHRpcGx5ID0gcmVxdWlyZSAnLi9tdWx0aXBseSdcbm1vZHVsZS5leHBvcnRzID0gKG4pIC0+XG4gIHJldHVybiBtdWx0aXBseShuLCBuKVxuXG4iXX0=
