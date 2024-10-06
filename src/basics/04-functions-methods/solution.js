// Function that does not return anything.
function greeting() {
  console.log("Hello World!");
}

// Function that returns a string.
function introduce(username, age, occupation) {
  return `Hello my name is ${username} i am ${age} years old and i work as a ${occupation}!`;
}

greeting();
let introduction = introduce("Arber", 20, "Software Developer");

console.log(introduction);
