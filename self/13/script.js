function roman(number) {
  let num = chart(number[0]);
  let pre, curr;

  for (let i = 1; i < number.length; i++) {
    curr = chart(number[i]);
    pre = chart(number[i - 1]);
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }
  return num;
}

function chart(c) {
  if (c === "I") {
    return 1;
  } else if (c === "V") {
    return 5;
  } else if (c === "X") {
    return 10;
  } else if (c === "L") {
    return 50;
  } else if (c === "C") {
    return 100;
  } else if (c === "D") {
    return 500;
  } else if (c === "M") {
    return 1000;
  }
}
console.log(roman("XXVI"));
console.log(roman("IX"));
console.log(roman("IL"));
console.log(roman("IC"));
console.log(roman("II"));
console.log(roman("LXV"));
