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

//another example
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(10));
let thrice = multiplier(3);
console.log(thrice(10));

/**CLOSURE - End*/
