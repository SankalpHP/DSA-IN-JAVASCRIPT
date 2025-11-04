/**
 *  Second recursion function sum range
 */

function sumRange(num){
    // BASE CASE
    if(num === 1) return 1;
    // RECURSIVE CALL WITH DIFFERENT INPUT
    return num + sumRange(num - 1);
}

console.log(sumRange(4));
