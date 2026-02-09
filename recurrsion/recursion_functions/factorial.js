// factorial of given number
function factorial(term) {
  if(term === 0) return 1;
  return term * factorial(term -1);
}

// reverse the string
function reverse(term) {
  let count = 0;
  let armStrong = 0;

  let remainder = term % 10;
  armStrong = armStrong + (remainder ** count);	
  term = (term - remainder) / 10;

  return 
}
if(multiplicand === 1) return multiplier;
  return multiplier + multiply(multiplier, multiplicand-1);
