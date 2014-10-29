
util = require('../util.js');
_ = require('underscore')

square = n => n * n 
console.log('square(5)', square(5));


class Car {
  constructor (brand) {
    this.brand = brand;
    this.speed = 25;
  }

  printSpeed() {
    console.log (this.brand + " is going " + this.speed + ' mph.');
  }
}
car = new Car('Mustang');
car.printSpeed();

_.each([1, 2, 3], n =>
  console.log('_.each', n)    
)
