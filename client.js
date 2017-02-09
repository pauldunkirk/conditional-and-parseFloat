// Conditional Assignment
// Create a function that takes two numbers.
//
// function myFunction (n1, n2) {
//     if (n1 > n2) {
//       return "The first number is bigger!"
//     } else if (n2 > n1) {
//         return "The second number is bigger!"
//     } else {
//         return "The numbers are the same!"
//     }
// }
// console.log("First is bigger:", myFunction (3, 2));
// console.log("Second is bigger:", myFunction (3, 4));
// console.log("Numbers are the same:", myFunction (5, 5));

// If the first number is bigger than the second number, return "The first number was bigger!".
// If the second number is bigger than the first number, return "The second number was bigger!".
// If the numbers are the same, return "The numbers are the same!".
//
// Example 1
// console.log(yourFunction(3, 2));
// should log: The first number was bigger!
//
// Example 2
// console.log(yourFunction(2, 7));
// should log: The second number was bigger!
//
// Example 2
// console.log(yourFunction(7, 7));
// should log: The numbers are the same!


// Pro Mode
// If a user submits values that are not numbers try to convert them to numbers.
// // So (e.g. if the user submits '86.7 taco' and 92, the function should compare 86.7 and 92)
//
// Pro Mode Example
// console.log(yourFunction('86.7 taco', 92));
// should log: The second number was bigger!
// Close



function myFunction (n1, n2) {
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
    if (n1 > n2) {
      return "The first number is bigger!"
    } else if (n2 > n1) {
      return "The second number is bigger!"
    } else if (n2==n1) {
      return "The numbers are the same!"
    } else {
      return "Try again buddy!"
    }
}

console.log("parseFloat Rocks!:", myFunction ('taco 86.7', 92));
console.log("First is bigger:", myFunction (3, 2));
console.log("Second is bigger:", myFunction (3, 4));
console.log("Numbers are the same:", myFunction (5, 5));


// started with notes from today's lecture:
// // var someString = "87.2 taco";
// // var someNumber = Number(someString);
// //
// // console.log(someString);
// // console.log(someNumber);
// //
// // var someFloat = parseFloat(someString);
// // console.log(someFloat);
// //
// // var someInt = parseInt(someString);
// // console.log(someInt);
// //
// // var anotherString = String(someInt);
// // console.log(anotherString);
