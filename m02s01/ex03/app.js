const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  test: 'hello boston',
  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },
  accelerate: function () {
    this.speed++;
    this.displaySpeed();
  },
  decelerate: function () {
    this.speed--;
    this.displaySpeed();
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
