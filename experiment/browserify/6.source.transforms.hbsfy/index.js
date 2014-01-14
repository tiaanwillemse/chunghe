
var tplDemo1 = require('./demo1.hbs')
document.querySelector('#demo1').innerHTML = tplDemo1({name: 'john'})

var tplDemo2 = require('./demo2.hbs')
var Handlebars = require('hbsfy/runtime')
Handlebars.registerHelper('uppercase', function (s) {
  console.log ('helper uppercase', s);
  return s.toUpperCase();
});
document.querySelector('#demo2').innerHTML = tplDemo2({name: 'john'})

var tplDemo3 = require('./demo3.hbs')
Handlebars.registerPartial('person', require('./_person.hbs'))
document.querySelector('#demo3').innerHTML = tplDemo3({people: [{name: 'john'}, {name: 'george'}, {name: 'mary'}]})
