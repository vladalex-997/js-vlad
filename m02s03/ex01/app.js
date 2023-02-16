class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = 150;
    this.topReverseSpeed = -80;
  }

  accelerate(deltaSpeed = 1) {
    // this.speed = this.speed + deltaSpeed;

    this.setspeed(this.speed + deltaSpeed);

    return this;
  }

  decelerate(deltaSpeed = 1) {
    // this.speed = this.speed - deltaSpeed;

    this.setspeed(this.speed - deltaSpeed);

    return this;
  }

  setspeed(speed = 0) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;

    return this;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
    return this;
  }

  // implementarea binecunoscutei metode
  // setSpeed + protectiile de supra si subaccelerare
  // + chaining
}

const audi = new Car('Audi', 'black', 4, 50);

audi.accelerate();
audi.displaySpeed();
audi.setspeed(123);
audi.displaySpeed();
audi.decelerate();
audi.displaySpeed();
