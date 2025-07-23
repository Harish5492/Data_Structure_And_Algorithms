/* 
Selection Sort
Logic: Repeatedly selects the minimum element and places it at the beginning.

Time Complexity:

Best/Average/Worst: O(n²)

Space: O(1)

Stable: ❌ (can be made stable)

Use Case: When memory is limited.
 */

// let arr = [4,5,11,32,91,35,89]
let arr = [9, 10, 50, 2, 4, 500];

function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
console.log(SelectionSort(arr));
