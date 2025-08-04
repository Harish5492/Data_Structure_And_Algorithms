function PrimeNumbers(n) {
  let primeNumbers = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

function isPrime(num) {
  if (num < 2) return false;
  let i = 2;
  while (i * i <= num) {
    if (num % i === 0) return false;
    i++;
  }
  return true;
}
console.log(PrimeNumbers(10));
