/*                        Bubble Sort
Logic: Repeatedly steps through the list, compares adjacent elements,
and swaps them if they are in the wrong order.

Time Complexity:

Best: O(n)

Average/Worst: O(n²)

Space: O(1)

Stable: ✅

Use Case: Educational, small datasets.
 */

let arr = [2, 4, 56, 43, 9, 33, 92, 8];

function BubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(BubbleSort(arr));
