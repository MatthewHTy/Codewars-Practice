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

