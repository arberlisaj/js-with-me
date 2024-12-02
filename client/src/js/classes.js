class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {}
  // This will be available on the Circle class (Circle.parse())
  static parse(str) {}
}

// Using symbols to implement private properties and methods
const _size = Symbol();
const _draw = Symbol();

class Square {
  constructor(size) {
    // Secure property (not really private)
    this[_size] = size;
  }
  // Secure method (not really private
  [_draw]() {}
}

// WeakMaps are better for private properties and methods
const _width = new WeakMap();

class Rectangle {
  constructor(width) {
    _width.set(this, width);
  }

  draw() {
    console.log('Rectangle with width' + _width.get(this));
  }
}

// Inheritance
class Triangle extends Shape {
  constructor(color) {
    // Call base constructor
    super(color);
  }

  draw() {
    // Call base method
    super.draw();
    //...
  }
}
