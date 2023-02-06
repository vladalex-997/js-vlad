const Car = {
  make: '',
  color: '',
  areLightsOn: false,
  wheels: 0,
  speed: 0,
  topSpeed: 0,
  topReverseSpeed: 0,
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
  setspeed: function (speed = 0) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;

    this.displaySpeed();
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();

    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 5 * 1000);
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 140;

audi.setspeed(140);
audi.accelerate();
