/**
 *   MORE IMPROVEED BUBBLE SORT
 * 
 *   The Bubble Sort algorithm can be improved a little bit more.
 *      Imagine that the array is almost sorted already, 
 *      with the lowest numbers at the start, 
 *      like this for example: [7, 3, 9, 12, 11]
 */

    let arr = [7, 3, 9, 12, 11];

    function bubbleSort(arr) {
        // ✅ Outer loop controls how many passes we perform
        for (let i = 0; i < arr.length; i++) {

            // Tracks whether any swap happened during this pass
            // If no swap occurs → array is already sorted → stop early
            let swap = false;

            // ✅ Inner loop: compare adjacent elements
            // It runs fewer times on each pass because the last i elements are already sorted
            for (let j = 0; j < arr.length - i; j++) {

                // If current value is greater than next → swap them
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];       // temporary storage
                    arr[j] = arr[j + 1];     // move smaller value left
                    arr[j + 1] = temp;       // move larger value right

                    swap = true;             // mark that a swap occurred
                }
            }

            // ✅ Optimization:
            // If no swaps happened in this entire pass → array is sorted → break early
            if (!swap) break;
        }

        // Return the fully sorted array
        return arr;
    }


    console.log(bubbleSort(arr));
    