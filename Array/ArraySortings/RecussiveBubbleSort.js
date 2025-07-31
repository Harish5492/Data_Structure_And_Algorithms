function bubbleSortByRecurrsion(arr, n) {
  if (n === 1) return arr;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return bubbleSortByRecurrsion(arr, n - 1);
}

console.log(bubbleSortByRecurrsion([64, 34, 25, 12, 22, 11, 90], 7));
