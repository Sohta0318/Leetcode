"use strict";
// //Apple onsite
// var romanToInt = function (s) {
//   let currentValue = 0;
//   for (let c = 0; c < s.length; c++) {
//     if (s[c] === "I") {
//       currentValue = currentValue + 1;
//       if ((currentValue = 1)) {
//         currentValue = currentValue - 2;
//       }
//     } else if (s[c] === "V") {
//       // do something
//       currentValue = currentValue + 5;
//       // if ((currentValue = 5)) {
//       //   currentValue -= 6;
//       // }
//     } else if (s[c] === "X") {
//       // do something
//       currentValue = currentValue + 10;
//       // if ((currentValue = 10)) {
//       //   currentValue -= 11;
//       // }
//     } else if (s[c] === "L") {
//       // do something
//       currentValue = currentValue + 50;
//       // if (currentValue >= 100) {
//       //   currentValue -= 50;
//       // }
//     } else if (s[c] === "C") {
//       // do something
//       currentValue = currentValue + 100;
//       // if (currentValue >= 500) {
//       //   currentValue -= 100;
//       // }
//     } else if (s[c] === "D") {
//       // do something
//       currentValue = currentValue + 500;
//       // if (currentValue >= 1000) {
//       //   currentValue -= 500;
//     } else if (s[c] === "M") {
//       // do something
//       currentValue = currentValue + 1000;
//     }
//   }
//   console.log(currentValue);
// };

// if (number == null) return -1;

// } else {
//   return -1;
// }

// romanToInt("XV");
// romanToInt("IX");
// romanToInt("VX");

// function roman(number) {
//   let num = chart(number.charAt(0));
//   let pre, curr;

//   for (let i = 1; i < number.length; i++) {
//     curr = chart(number.charAt(i));
//     pre = chart(number.charAt(i - 1));
//     if (curr <= pre) {
//       num += curr;
//     } else {
//       num = num - pre * 2 + curr;
//     }
//   }
//   return num;
// }
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
console.log(roman("IIC"));

console.log(1 - 1 * 2 + 10); // IX
