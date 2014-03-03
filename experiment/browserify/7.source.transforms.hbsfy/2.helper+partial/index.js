
var hello = require('./hello.hbs')
var Handlebars = require("hbsfy/runtime");

var Handlebars = require("hbsfy/runtime");

Handlebars.registerHelper("upcase", function(s) {
  return s.toUpperCase();
});

Handlebars.registerPartial('fruits', require("./_fruits.hbs"));


document.querySelector('#demo1').innerHTML = hello({name: 'john', fruits: ['banana', 'grava', 'pineapple']})

