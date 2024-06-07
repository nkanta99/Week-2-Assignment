// Activity 1

// const factorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(33));


// Activity 2

// let orderCount = 0;

// const takeOrder = (topping, crustType) => {
//   console.log(`Pizza with ${topping} and ${crustType} crust`);
//   orderCount++;
//   console.log(`Order number: ${orderCount}`);
// };

// takeOrder("pineapple", "thin");
// takeOrder("pepperoni", "thick");


// Activity 3

const correctPin = 1234;
let balance = 1000;

const cashMachine = (enteredPin, amountToWithdraw) => {
  if (enteredPin !== correctPin) {
    console.log("Incorrect PIN. Please try again.");
    return;
  }
  
  if (amountToWithdraw > balance) {
    console.log("Insufficient balance.");
    return;
  }

  balance -= amountToWithdraw;
  console.log(`Transaction successful! Dispensed $${amountToWithdraw}. New balance: $${balance}.`);
};

cashMachine(1234, 500); 
cashMachine(1111, 500); 
cashMachine(1234, 2000); 
