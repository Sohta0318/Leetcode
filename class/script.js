"use strict";
//test if it's prie number or not
function prime(n) {
  // 1 and 2 is exceptional
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (
      let i = 2; // it start from 2 because every number can be divided by 1
      i < n;
      i++
    ) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(prime(50));
console.log("--------------------------");
