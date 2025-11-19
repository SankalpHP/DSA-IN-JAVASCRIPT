/**
 *   SORT THE ARRAY USING BUBBLE SORT
 */

let arr = [64, 34, 25, 12, 22, 11, 90, 5];

function bubbleSort(arr) {

    // ✅ Outer loop controls how many passes we make
    // After each pass, the largest value moves to the end
    for (let i = 0; i < arr.length; i++) {

        // ✅ Inner loop compares adjacent elements
        // It runs fewer times every pass because the largest numbers
        // have already bubbled to the end
        for (let j = 0; j < arr.length - i; j++) {

            // ✅ If current element is greater than next element → swap
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];        // store current element
                arr[j] = arr[j + 1];      // move smaller element left
                arr[j + 1] = temp;        // place larger element on the right
            }
        }
    }

    // ✅ Return the sorted array
    return arr;
}


console.log(bubbleSort(arr));

