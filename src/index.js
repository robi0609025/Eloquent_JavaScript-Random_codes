//let theNumber = Number("8");

//console.log(theNumber);
//console.log("Your number is " + theNumber);

// // if- else structure
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is " + theNumber);
// } else {
//   console.log("Hey!!! Why didn't you give me a number.");
// }

// //this function will force you to enter your name
// let yourName;
// do{
//   yourName = prompt("Please enter your name");
// } while (!yourName);

// console.log(yourName);

// //find the first number that is both grater than or equal to 20 and divisible by 7
// let theNumber;
// for (theNumber = 20; ; theNumber++){
//   if (theNumber % 7 === 0) break;
// }
// console.log(theNumber);

// //switch
// let weather = "Sunny";
// switch (weather)
// {
//   case "Rainy":
//     console.log("It's rainy today");
//     break;
//   case "Sunny":
//       console.log("It's sunny today");
//       break;
//   default:
//     break;
// }

// //Exercise -1 : Looping a triangle
// for (let i = 0; i < 7; i++){
//   let starForm = "";
//   for (let j = 0; j <= i; j++){
//     starForm = starForm + "#";
//   }
//   console.log(starForm);
// }

// // FizzBuzz
// for (let theNumber = 1; theNumber <= 100; theNumber++) {
//   if (theNumber % 5 === 0 && theNumber % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (theNumber % 3 === 0) {
//     console.log("Fizz");
//   } else if (theNumber % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(theNumber);
//   }
// }

// //Chessboard
// let theFinalString = "";
// const size = 8;
// for (let i = 0; i < size; i++) {
//   for (let j = 0; j < size / 2; j++) {
//     // console.log("# ");
//     theFinalString += "# ";
//   }
//   theFinalString += "\n";
// }
// console.log(theFinalString);

/**CLOSURE - Strat
 */

// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }
// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

// //another example
// function multiplier(factor) {
//   return number => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(10));
// let thrice = multiplier(3);
// console.log(thrice(10));

/**CLOSURE - End*/

/**RECURSION - START
 *
 *
 */
//power function using recursion
// function power(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }
// console.log(power(2,4));

// //math puzzle in page 81
// function findSolution(target) {
//   function find(current, history) {
//     if (current === target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `(${history} * 3)`)
//       );
//     }
//   }
//   return find(1, "1");
// }
// console.log(findSolution(6));
/**RECURSION - END */

/**
 * GROWING FINCTIONS - START
 */
// //Printing farm inventory with repeating codes
// function printFarmInventory(cows, chicken) {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = "0" + cowString;
//   }
//   console.log(`${cowString} Cows`);
//   let chickenString = String(chicken);
//   while (chickenString.length < 3) {
//     chickenString = "0" + chickenString;
//   }
//   console.log(`${chickenString} Chicken`);
// }
// printFarmInventory(727, 11);

// Implement the same code without repeating yourself

// function zeroPadding(number, width) {
//   let numberString = String(number);
//   while (numberString.length < width) {
//     numberString = "0" + numberString;
//   }
//   return numberString;
// }
// function printFarmInventory(cows, chicken, pigs) {
//   console.log(zeroPadding(cows, 3) + " Cows");
//   console.log(zeroPadding(chicken, 3) + " Chicken");
//   console.log(zeroPadding(pigs, 3) + " Pigs");
// }
// printFarmInventory(27, 11, 7);

/**
 * GROWING FINCTIONS - END
 */

/**Chapter 3 exercise - Start
 *
 *
 */
//Minimum function

// function min(num1, num2) {
//   if (num2 < num1) return num2;
//   else return num1;
// }
// console.log(min(-3,-2));

// //Recursion excercise
// function isEven(number) {
//   //if (number < 0) number = -number;
//   number = Math.abs(number); //using built in math function
//   if (number === 0) {
//     return true;
//   } else if (number === 1) {
//     return false;
//   } else {
//     return isEven(number - 2);
//   }
// }
// console.log(isEven(-50));

//Bean counting
// let line = "The less you talk, the more you are listened to.";
// function countChar(line, char) {
//   let counter = 0;
//   let length = line.length;
//   //recursive function
//   function findChar(length) {
//     if (length === 0) {
//       return counter;
//     }
//     if (line[length - 1] === char) {
//       counter++;
//     }
//     length--;
//     return findChar(length);
//   }
//   return findChar(length);
// }
// console.log(countChar(line, " "));

/**Chapter 3 exercise - End*****/
