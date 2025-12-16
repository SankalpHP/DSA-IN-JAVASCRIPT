/**
 *  Find the ODD numbers in a array's
 * 
 *  How the recursive call will work
 *  [1,2,3,4,5]
 *  [1,2,3,4]
 *  [1,2,3]
 *  [1,2]
 *  [1]
 *  [] -> BASE CASE
 * 
 *  hint :- Use the helper design pattern.
 */

function findOdds(arr){

    let Odds = [];

    function helper(arr){
        // BASE CASE
        if(arr.length === 0) return;
        
        if(arr[arr.length - 1] % 2 !== 0)
            Odds.push(arr[arr.length - 1]);

        // RECURSION CALL WITH DIFFERENT INPUT
        arr.pop();
        return helper(arr);
    }

    // CALLING THE HELPER FUNCTION
    helper(arr);

    return Odds;
}

console.log(findOdds([1,2,3,4,5,6,7,8,9,10]));

/**  
    BETTER WAY TO THIS...

    function oddMan(arr){
        let odd = [];

        function helper(arr){
            // BASE CONDITION 
            if(!arr.length){
                return ;
            }
            if(arr[0]%2 != 0){
                odd.push(arr[0]);
            }
            // RECURSIVE CALL WITH DIFFERENT INPUT
            helper(arr.slice(1));
        }

        helper(arr);
        return odd;
    }
        
 */

