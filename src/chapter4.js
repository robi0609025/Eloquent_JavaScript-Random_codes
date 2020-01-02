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

// /**SQUIRRELMAN - starts here */

// //Correlation - Phi coefficient

// import JOURNAL from "/src/jacques_journal.js";

// /**phi function to calculate correlation coefficient  */
// function phi(table) {
//   return (
//     (table[0] * table[3] - table[1] * table[2]) /
//     Math.sqrt(
//       (table[0] + table[1]) *
//         (table[2] + table[3]) *
//         (table[0] + table[2]) *
//         (table[1] + table[3])
//     )
//   );
// }
// //console.log(phi([76, 9, 4, 1]));

// //console.log(JOURNAL.length);

// function tableFor(event, journal) {
//   let table = [0, 0, 0, 0];
//   //for (let i = 0; i < journal.length; i++) {
//   for (let entry of journal) {
//     // if (journal[i].squirrel && journal[i].events.includes(event)) {
//     //   table[3]++;
//     // } else if (journal[i].squirrel && !journal[i].events.includes(event)) {
//     //   table[2]++;
//     // } else if (!journal[i].squirrel && journal[i].events.includes(event)) {
//     //   table[1]++;
//     // } else {
//     //   table[0]++;
//     // }

//     //refactoring the conditions - a better way
//     let index = 0;
//     if (entry.events.includes(event)) {
//       index += 1;
//     }
//     if (entry.squirrel) {
//       index += 2;
//     }
//     table[index]++;
//   }
//   return table;
// }

// //console.log(tableFor("pizza", JOURNAL));
// //console.log(phi(tableFor("pizza", JOURNAL)));

// function journalEvents(journal) {
//   let listOfEvents = [];
//   for (let entry of journal) {
//     //console.log(entry);
//     for (let event of entry.events) {
//       //console.log(event);
//       if (!listOfEvents.includes(event)) {
//         listOfEvents.push(event);
//       }
//     }
//   }
//   return listOfEvents;
// }
// //journalEvents(JOURNAL);
// //console.log(journalEvents(JOURNAL));
// //onsole.log(journalEvents(JOURNAL).length);

// //checking the phi coefficient
// for (let event of journalEvents(JOURNAL)) {
//   //console.log(event);
//   let occuranceTable = tableFor(event, JOURNAL);
//   //console.log(occuranceTable);
//   let phiCoefficient = phi(occuranceTable);
//   if (phiCoefficient > 0.2 || phiCoefficient < -0.2) {
//     //console.log(`${event} : ` + phiCoefficient);
//   }
// }

// //combining 2 phi coefficient
// for (let entry of JOURNAL) {
//   if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
//     entry.events.push("peanut teeth");
//   }
// }
// console.log( phi( tableFor("peanut teeth", JOURNAL)));

// /**SQUIRRELMAN - finishes here */

/**Further Arrayology */
//push, pop, shift, unShift
console.log([1, 2, 3, 4].indexOf(4))
/**Further Arrayology */