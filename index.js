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


// Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of present in the arrray (true means present).
function countSheeps(arrayOfSheep) {
    let num = 0;
    for(let i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] === true)
      num++;
    return num;
}
// Ternary Operator
function countSheeps(arrayOfSheep) {
    let num = 0;
    for(let i = 0; i < arrayOfSheep.length; i++)
    arrayOfSheep[i] === true ? num++ : false;
    return num
}