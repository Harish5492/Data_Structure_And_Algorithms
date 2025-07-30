/* 
Insertion Sort
Logic: Builds the sorted array one element at a 
time by inserting elements into their correct position.

Time Complexity:

Best: O(n) (nearly sorted)

Average/Worst: O(n²)

Space: O(1)

Stable: ✅

Use Case: Small or nearly sorted datasets.
 */

let arr = [4, 9, 7, 8, 3];
function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(InsertionSort(arr))