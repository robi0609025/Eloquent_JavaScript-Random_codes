/**
 * doh.toUpperCase()
 * doh.toLowerCase()
 * sequence.push(4);
 * let var = sequence.pop();
 * delete anObject.left
 * console.log("left" in anObject); => true/false
 * Object.keys(anObject) => Object.Keys() method will return an array of all keys in the object
 * Object.assign(anObject, { up: 3, down: 4, left: 0 }); => Object.assign will assign a new value or key - value to an object
 * Number, strings and Boolean are immutable. That means they are read only.
 *
 *
 */

//Properties that contain functions are generally called methods of the value they belong to, as in "toUpperCase is a method of a string"

//toUpperCase or toLowerCase
// let doh = "Doh";
// console.log(doh.toUpperCase());

//push or pop
// let sequence = [1, 2, 3];
// sequence.push(4);
// sequence.push(5);
// console.log(sequence);
// console.log(sequence.pop());
// console.log(sequence);
// sequence.push("robi");

//Weresquirrel
// let day1 = {
//   squirrel: false,
//   events: ["work", "touched tree", "pizza", "running"]
// };
// // console.log(day1);
// day1.wolf = false;

// let descriptions = {
//   work: "went to work",
//   "touched tree": "Touched a tree"
// };
// console.log(descriptions);

//deleting a property from an object
// let anObject = {
//   left: 1,
//   right: 2
// };
// //console.log(anObject);
// //delete anObject.left;
// //console.log(anObject.left);

// // "in" operator
// //console.log("left" in anObject);
// //console.log("right" in anObject);

// //Object.Keys() method will return the array of all keys in the object
// console.log(Object.keys(anObject));

// //Object.assign will assign a new value or key - value to an object
// Object.assign(anObject, { up: 3, down: 4, left: 0 });
// console.log(anObject);

// //WereSquirrel
// let journal = [
//   {
//     events: ["work", "touched tree", "pizza", "running", "television"],
//     squirrel: false
//   },
//   {
//     events: [
//       "work",
//       "ice cream",
//       "cauliflower",
//       "lasagna",
//       "touched tree",
//       "brushed teeth"
//     ],
//     squirrel: false
//   },
//   {
//     events: ["weekend", "cycling", "break", "peanuts", "beer"],
//     squirrel: true
//   }
// ];

// console.log(journal);

//Correlation - Phi coefficient

let journal = [];
console.log(journal);

function phi(table) {
  return (
    (table[0] * table[3] - table[1] * table[2]) /
    Math.sqrt(
      (table[0] + table[1]) *
        (table[2] + table[3]) *
        (table[0] + table[2]) *
        (table[1] + table[3])
    )
  );
}
console.log(phi([76, 9, 4, 1]));
