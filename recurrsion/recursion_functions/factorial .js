function factorial(term) {
  if(term === 0) return 1;
  return term * factorial(term -1);
}

factorial(4);