/**
 *  power Write a function called power which accepts a base and an exponent. 
 *  The function should return the power of the base to the exponent. 
 *  This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
 * 
 *      power(2,0) => 1
        power(2,2) => 4
        power(2,4) => 16
 */

function power(num, pow) {
    // ✅ Step 1: Base condition — any number to power 0 is 1
    if (pow === 0) return 1;

    // ✅ Step 2: Base case — if power is 1, just return the number
    if (pow === 1) {
        return num;
    }

    // ✅ Step 3: Recursive case
    // Multiply the number by the result of num^(pow - 1)
    // (--pow decreases power by 1 in each recursive call)
    return num * power(num, --pow);
}

console.log(power(2, 4)); // ✅ Output: 16

