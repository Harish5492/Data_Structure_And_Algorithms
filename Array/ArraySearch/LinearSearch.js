let arr = [2, 4, 56, 43, 9, 33, 92, 8];

/**
 * Performs linear search on an array to find the target value.
 *
 * @param {number[]} arr - Array to search through.
 * @param {number} target - Value to search for.
 * @returns {number} Index of the target if found, otherwise -1.
 *
 * @example
 * LinearSearch([2, 4, 56, 43, 9, 33, 92, 8], 33); // Returns 5
 * Space Complexity = O(1)
 * Time Complexity = O(n)--- Average/Worst Case and Best Case O(1)
 */
function LinearSearch(arr, target) {
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1;
}

console.log(LinearSearch(arr, 33)); // Output: 5