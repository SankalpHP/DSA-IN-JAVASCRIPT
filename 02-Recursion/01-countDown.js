/**
 *  First recursion function count down
 */

function countDown(num){

    // BASE CASE;
    if(num <= 0){
        console.log('ALL DONE!');
        return;
    }
  
    console.log(num);
    num--;
    // RECURSIVE CALL WITH DIFFERENT INPUT CALL;
    countDown(num);
    
}

console.log(countDown(5));
