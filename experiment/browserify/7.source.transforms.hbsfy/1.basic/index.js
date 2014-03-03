
var hello = require('./hello.hbs')
var fruits = require('./fruits.hbs')


document.querySelector('#demo1').innerHTML = hello({name: 'john'})
document.querySelector('#demo2').innerHTML = fruits(['banana','grava', 'pineapple'])

