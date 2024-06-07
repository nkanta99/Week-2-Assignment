
// const pet = {
//   name: "Buddy",
//   typeOfPet: "Dog",
//   age: 3,
//   colour: "Brown",

//   eat() {
//     return `${this.name} is eating.`;
//   },

//   drink() {
//     return `${this.name} is drinking.`;
//   }
// };

// console.log(pet.name);         
// console.log(pet.typeOfPet);     
// console.log(pet.age);            
// console.log(pet.colour);          

// console.log(pet.eat());            
// console.log(pet.drink());          

const person = {
  myName: "Isaac",
  isAwesome: true,
  eyeColour: "brown",

  takeApple(apples) {
    console.log(`Thanks for the ${apples} apples`);
  },

  markWork(work) {
    const message = work ? "Great job!" : "Try harder!";
    console.log(message);
  },

  checkIsAwesome() {
    return this.isAwesome ? "Yes, is awesome" : "No!!!!!!";
  },

  changeEyeColour(colour) {
    this.eyeColour = colour;
  },

  returnPersonName() {
    return this.myName;
  },

  sayHi() {
    return `Hello, my name is ${this.myName}`;
  }
};

console.log(person.eyeColour);        
person.changeEyeColour("green");
console.log(person.eyeColour);          

console.log(person.sayHi());             
