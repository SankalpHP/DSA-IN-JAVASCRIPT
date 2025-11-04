/**
 *  Factorial function using recursion
 * 
 *  4! => 4 * 3 * 2 * 1
 *  5! => 5 * 4 * 3 * 2 * 1
 */

function Factorial(num){
    // BASE CASE
    if(num === 1) return 1;
    // RECURSIVE CALL WITH DIFFERENT INPUT
    return num * Factorial(num - 1);
}

console.log(Factorial(5));
