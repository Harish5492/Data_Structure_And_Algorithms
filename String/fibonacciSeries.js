/**
 * Generates the Fibonacci series up to the nth term and returns
 * a string describing the nth Fibonacci number and the full series.
 *
 * The Fibonacci sequence is generated using iteration, starting
 * from 0 and 1, and each next term is the sum of the previous two.
 *
 * Example:
 *   fibonacciSeries(5) → "At the 5th position, the Fibonacci Number is 3 and the series is 0,1,1,2,3"
 *
 * @param {number} n - The number of terms in the Fibonacci series (must be >= 2).
 * @returns {string} A string indicating the nth Fibonacci number and the complete series.
 */
function fibonacciSeries(n) {
  let a = 0;
  let b = 1;
  let array = [a, b];

  for (let i = 2; i < n; i++) {
    let next = a + b;
    a = b;
    b = next;
    array.push(b);
  }

  return `At the ${n}th position, 
            the Fibonacci Number = ${b} 
            and the series = [${array.join(",")}].`;
}

console.log(fibonacciSeries(5));
