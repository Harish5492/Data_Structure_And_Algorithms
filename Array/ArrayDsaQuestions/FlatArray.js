// 🥇 1. Iterative (Best for performance and large arrays)
function flatArray(arr) {
    let result = [];
    let stack = [...arr]; // Use stack to process elements
  
    while (stack.length > 0) {
      let current = stack.pop();
  
      if (Array.isArray(current)) {
        stack.push(...current); // Push nested array elements back
      } else {
        result.push(current); // Store flat value
      }
    }
  
    return result.reverse(); // Reverse to maintain original order
  }
  
  console.log("1. Iterative:", flatArray([1, 2, [3, 4], [5, [6, 7]]]));
  
  
  
  // 🥈 2. Recursive with Spread (Clean and readable)
  function flatArrayBySpreadOperator(arr) {
    let result = [];
  
    for (let element of arr) {
      if (Array.isArray(element)) {
        result.push(...flatArrayBySpreadOperator(element)); // Recursively flatten
      } else {
        result.push(element);
      }
    }
  
    return result;
  }
  
  console.log("2. Recursion + Spread:", flatArrayBySpreadOperator([1, 2, [3, 4], [5, [6, 7]]]));
  
  
  
  // 🥉 3. Recursive with concat (Simple, but concat is slower)
  function flatArrayByRecursion(arr) {
    let result = [];
  
    for (const element of arr) {
      if (Array.isArray(element)) {
        result = result.concat(flatArrayByRecursion(element)); // Recursively flatten and merge
      } else {
        result.push(element);
      }
    }
  
    return result;
  }
  
  console.log("3. Recursion + Concat:", flatArrayByRecursion([1, 2, [3, 4], [5, [6, 7]]]));
  
  
  
  // 🏅 4. One-liner using reduce (Elegant but slowest)
  const flattenOneLine = arr =>
    arr.reduce(
      (acc, val) =>
        acc.concat(Array.isArray(val) ? flattenOneLine(val) : val), // Recursively flatten or return value
      [] // Start with empty array
    );
  
  console.log("4. One-liner reduce:", flattenOneLine([1, 2, [3, 4], [5, [6, 7]]]));
  