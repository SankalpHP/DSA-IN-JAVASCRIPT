/**
 *  factorial
    Write a function factorial which accepts a number and returns the factorial of that number. 
    A factorial is the product of an integer and all the integers below it; 
    e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
    factorial zero (0!) is always 1.

    factorial(1) // 1
    factorial(2) // 2
    factorial(4) // 24
    factorial(7) // 5040

    2! = 2 * 1 => 2
    4! = 4 * 3 * 2 * 1 => 24
 */

    function factorial(num){
        // BASE CASE
        if(num === 1 || num === 0){
            return 1;
        }
        // RECURSIVE CALL WITH DIFFERENT INPUT
        return num * factorial(--num);
    }

    console.log(factorial(7));
    