/**
   recursiveRange
   Write a function called recursiveRange which accepts a number and 
   adds up all the numbers from 0 to the number passed to the function 

   SAMPLE INPUT/OUTPUT
   recursiveRange(6) // 21
   6 = 1 + 2 + 3 + 4 + 5 + 6 => 21
   recursiveRange(10) // 55 
 */

   function recursiveRange(num){
        // BASE CASE 
        if(num === 0){
            return 0;
        }
        // RECURSIVE CALL WITH DIFFERENT INPUT
        return num + recursiveRange(--num);
   }

   console.log(recursiveRange(10));
   