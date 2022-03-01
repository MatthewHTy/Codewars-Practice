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
// We need a function that counts the number of present in the array (true means present).
function countSheeps(arrayOfSheep) {
  let num = 0;
  for (let i = 0; i < arrayOfSheep.length; i++);
  if (arrayOfSheep[i] === true);
  num++;
  return num;
}
// Ternary Operator
function countSheeps(arrayOfSheep) {
  let num = 0;
  for (let i = 0; i < arrayOfSheep.length; i++);
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
function repeatStr(n, s) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string += s
  }
  return string
}
// Convert a booleam to a string
// Implement a function which convert the given boolean value into its string representation
function booleanToString(b) {
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
  return n < 0 || m < 0 ? 0 :
    n * m;
}
// Even or Odd
function even_or_odd(number) {
  if (number % 2 == 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}

function even_or_odd(number) {
  return number % 2 == 0 ? 'Even' :
    'Odd'
}
// String to a number
function stringToNumber(num) {
  return num ? num.toString() : false;
};
// create a function which returns an RNA sequence from the given DNA sequence
function DNAtoRNA(dna) {
  return dna ? dna.split('T').join('U') :
    'DNA Sequence';
}
// reversed strings
function solution(str) {
  return str.split('').reverse().join('')
}
// create a function where an if else statement is used to determine if a hero will survive
//   x amount of bullets that we don't know
//  x amount of dragons that we don't know
// return true if he survives, and false if he doesn't
// solution we can use is an if else statement or a ternary operator
// if else statement
function heRo(bullets, dragons) {

  if (bullets / 2 >= dragons) {
    return true;
  } else {
    return false;
  };

  // ternary operator
  return bullets / 2 >= dragons ? true : false;
}
// Square(n)Sum
// function squareSum(numbers) {

//   let result = 0;
//   // let result = 0, to be used inside the for loop
//   for (let i = 0; i < numbers.length; i++) {
//     // need a for loop to run through the index of the array when the function is called
//     result += (numbers[i] * numbers[i]);
//   }
//   return result
// }
// Using Math.pow method
function squareSum(numbers) {

  let result = 0;
  //   to be used for summing the results inside the for loop
  for (let i = 0; i < numbers.length; i++) {
    //     for loop is used to run through the array of numbers given
    result += (Math.pow(numbers[i], 2))
    //     math. pow method used to square the number
  };
  return result;
}
console.log(squareSum(100));
// function to return student's grades
function finalGrade(exam, projects) {

  //   grade for exam is 0 to 100
  //  projects - number of completed projects (from 0 and above)

  //   let resultOfExam = 0;
  //   let numberOfProjects = 0;
  // will be used later in statements to find out what grades the student got

  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }

  //   return finalGrade
  // ternary operator
  //   return a number (final grade)
}

function removeChar(str) {
  //You got this!
  return str.slice(1, str.length - 1);

};

function shortcut(string) {

  let vowels = 'aeiou';
  let output = [];

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      output.push(string[i])
    }
  };
  return output.join('');
  // or output.join([])
  // .join method concatenates the string into one
};
// Grasshopper - Gradebook
function getGrade(s1, s2, s3) {
  // Code here
  let sumOfGrades = (s1 + s2 + s3) / 3;

  if (sumOfGrades >= 90) {
    return "A"
  } else if (sumOfGrades >= 80 && sumOfGrades < 90) {
    return "B"
  } else if (sumOfGrades >= 70 && sumOfGrades < 80) {
    return "C"
  } else if (sumOfGrades >= 60 && sumOfGrades < 70) {
    return "D"
  } else {
    return "F"
  }
  return getGrade;
}

function sixToast(num) {
  // you code here
  let numberOfToast = 0;
  if (num > 6) {
    numberOfToast = num - 6
  } else if (num < 6) {
    numberOfToast = 6 - num
  } else if (num == 6) {
    numberOfToast = 0;
  }
  return numberOfToast
}

// Roman Numerals to Integer