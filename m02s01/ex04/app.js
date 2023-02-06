class Car {
  areHazardsOn = false;
  areLightsOn = false;
  areBreaksOn = false;
  constructor(left = 0, top = 0, color = 'black') {
    this.left = left;
    this.top = top;
    this.color = color;

    this.intervalId = -1;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.changePosition(this.left, this.top);

    this.createFragment();
  }

  createFragment() {
    this.car = this.createElement('div', ['car']);
    this.frame.append(this.car);

    // roof?
    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // body
    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // light back
    this.lightBack = this.createElement('div', ['light', 'light--back']);
    this.carBody.append(this.lightBack);

    // light front
    this.lightFront = document.createElement('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    // wheel back
    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.wheelCapBack = document.createElement('div');
    this.wheelCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.wheelCapBack);

    // wheel front
    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.wheelCapFront = document.createElement('div');
    this.wheelCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.wheelCapFront);
    return this;
  }

  turnLightsOn() {
    // this.lightFront.style.backgroundColor = 'yellow';
    this.lightFront.classList.add('light--on');
    this.areLightsOn = true;
    return this;
  }

  turnLightsOff() {
    this.lightFront.classList.remove('light--on');
    this.areLightsOn = false;
    return this;
  }

  engageBreak() {
    this.lightBack.classList.add(`light--on`);
    this.areBreaksOn = true;
    return this;
  }

  disengageBreak() {
    this.lightBack.classList.remove(`light--on`);
    this.areBreaksOn = true;
    return this;
  }

  changeTireColor(color) {
    this.wheelBack.style.backgroundColor = color;
    this.wheelFront.style.backgroundColor = color;
    return this;
  }

  changeCapColor(color) {
    this.wheelCapBack.style.backgroundColor = color;
    this.wheelCapFront.style.backgroundColor = color;
    return this;
  }

  changeBodyColor(color) {
    this.carBody.style.backgroundColor = color;
    return this;
  }

  changeRoofColor(color) {
    this.carTop.style.backgroundColor = color;
    return this;
  }

  changePosition(left = 0, top = 0) {
    this.frame.style.left = `${left}px`;
    this.frame.style.top = `${top}px`;
    return this;
  }

  createElement(nodeName = '', classListArray = []) {
    const element = document.createElement(nodeName);
    // element.classList.add(...classListArray);

    classListArray.forEach((className) => {
      element.classList.add(className);
    });

    return element;
  }

  toggleHazards() {
    if (this.areHazardsOn === true) {
      // stop hazards
      clearInterval(this.intervalId);
      this.areHazardsOn = false;
    } else {
      // v2 for "this"
      this.intervalId = setInterval(() => {
        if (this.areLightsOn === true) {
          this.turnLightsOff();
        } else {
          this.turnLightsOn();
        }
      }, 800);
      this.areHazardsOn = true;
    }

    return this;
  }

  render() {
    document.body.append(this.frame);

    // method chaining
    return this;
  }
}

const car = new Car(0, 250, 'red');
car.render();
car.changeRoofColor(`yellow`);
