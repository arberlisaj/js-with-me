// Object literal
const circle = {
  radius: 1,
  draw: function () {},
};

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {},
  };
}

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {};
}

// Every object has a "constructor" property which returns the function that was
// used to construct or create that object.
const x = {};
x.constructor;

// Functions are objects, they have properties and methods.
Circle.name;
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function
Circle.apply({}, [1]);

// Value types: String, Number, Boolean, Symbol, undefined and null
// Reference types: Object, Function and Array

// Objects are dynamic, you can add/remove properties:
circle.location = {};
circle['location'] = {};

delete circle.location;

// To enumerate the members in an object:
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle);

// To see if an object has a given property
if ('location' in circle)
  // Abstraction means hiding the complexity/details and showing only the essentials
  // we can hide the details by using private members, replace "this" with "let".

  function Circle(radius) {
    // Public member
    this.radius = radius;

    // Private member
    let defaultLocation = {};
  }

// To define a getter/setter, use Object.defineProperty():
Object.defineProperty(this, 'defaultLocation', {
  get: function () {
    return defaultLocation;
  },
  set: function (value) {
    defaultLocation = value;
  },
});
