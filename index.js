// Find the Remainder 8Kyu
// Divide the larger argument by the smaller argument and return the remainder
// % modulus operator used for remainder
// (a % b)
// If else statement or ternary operator could be used here
function remainder(a, b) {
    if (b > a) {
        return b % a 
    } else {
        return a % b
    }
}
// ternary operator for find the remainder
function remainder(a, b) {
    return a > b ? a % b : b % a;
}
// Counting sheep... 8kyu
// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of present in the arrray (true means present).
function countSheeps(arrayOfSheep) {
    let num = 0;
    for(let i = 0; i < arrayOfSheep.length; i++);
    if(arrayOfSheep[i] === true);
      num++;
    return num;
}
// Ternary Operator
function countSheeps(arrayOfSheep) {
    let num = 0;
    for(let i = 0; i < arrayOfSheep.length; i++);
    arrayOfSheep[i] === true ? num++ : false;
    return num
}
// Sum of positive 8kyu
function positiveSum(arr) {
let num = 0;
  for (let i = 0; i < arr.length; i++) 
    if (arr[i] > 0) {
      num += arr[i]
    }
    return num
}
function positiveSum(arr) {
    let num = 0;
      for (let i = 0; i < arr.length; i++);
        arr[i] > 0 ? num += arr[i] : false;
    return num;
}
// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations
// The function should take three arguments - operation(string/char), value1(number), value2(number)
// The function should return result of numbers after applying the chosen operation
function basicOp(operation, value1, value2) {
     // Code
//   + operator
  return operation == '+' ? value1 + value2 :
  //   - operator
           operation == '-' ? value1 - value2 :
  //   * operator
           operation == '*' ? value1 * value2 :
  //   / operator
           operation == '/' ? value1 / value2 : 'No Value'
}
// String repeat 8kyu
// Write a function called repeatStr which repeats the given string exactly n times
function repeatStr (n, s) {
    let string = "";
    for (let i = 0; i < n; i++) {
    string += s
    }
    return string
  }
// Convert a booleam to a string
// Implement a function which convert the given boolean value into its string representation
function booleanToString(b){
    return b ? "true" : "false";
  }
//   For Twins 2. Math Operations
function iceBrickVolume(radius, bottleLength, rimLength) {
    // Your code should be here ;
    let height = bottleLength - rimLength
    return radius * radius * (height + height)
  }
// Return Negative 8kyu
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
    return num ? -num : positive;
  }
  // Basic variable assignment
// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
var a = "code";
var b = "wa.rs";
var name = a + b;
// Beginner series #1 school paperwork
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0
  : n * m;
}
// Even or Odd
function even_or_odd(number) {
  if(number % 2 == 0) {
    return 'Even' 
  } else {
    return 'Odd'
  }
}
function even_or_odd(number) {
  return number % 2 == 0 ? 'Even' :
  'Odd'
}