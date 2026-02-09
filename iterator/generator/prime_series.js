// - Prime number series

// function* primeSeries() {
//   let primeCandidate = 2;
//   while (true) {
//       let count = 0;
//       for (let divisor = 2; divisor < primeCandidate; divisor++){
//         if (primeCandidate % divisor === 0) {
//           count = count + 1;
//         }
//       }
    
//       if (count === 0) {
//         yield primeCandidate;
//       }
//     primeCandidate++;
//   }
// }


function* primeSeries() {
  const primes = [];
  let primeCandidate = 2;
  while (true) {

    const result = primes.every(element => primeCandidate % element !== 0);
    if (result) {
      primes.push(primeCandidate)
      yield primeCandidate;
    }
    primeCandidate++;
  }
}

const iterate = primeSeries();

