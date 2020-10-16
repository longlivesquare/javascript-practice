class Vehicle {
    constructor(type, wheels = 0, maxSpeed) {
        this.type = type;
        this.wheels = wheels;
        this.maxSpeed = maxSpeed;
    }
    get type() {
        return this.type;
    }
    get wheels() {
        return this.wheels;
    }
    get maxSpeed() {
        return this.maxSpeed;
    }
    set type(type) {
        this.type = type;
    }
    set wheels(wheels) {
        if (wheels > 0) {
            this.wheels = wheels;
        }
    }
    set maxSpeed(maxSpeed) {
        if (maxSpeed > 0) {
            this.maxSpeed = maxSpeed;
        }
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color, maxSpeed, type = "Car", wheels=4) {
        this.type = type;
        this. wheels = wheels;
        this.maxSpeed = maxSpeed;
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    get make() {
        return this.make;
    }
    get model() {
        return this.model;
    }
    get year() {
        return this.year;
    }
    get color() {
        return this.color;
    }
    set make(make) {
        this.make = make;
    }
    set model(model) {
        this.model = model;
    }

    set year(year) {
        if (year > 1672) {
            this.year = year;
        }
    }

    set color(color) {
        this.color = color;
    }
}