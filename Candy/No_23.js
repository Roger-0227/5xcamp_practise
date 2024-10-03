// 編號：CANDY-023
// 程式語言：JavaScript
// 題目：算出 N 個數字的最大公因數

function calcGCD(...numbers) {
  return numbers.reduce((acc, cv) => {
    while (cv !== 0) {
      const remainder = cv;
      cv = acc % cv;
      acc = remainder;
    }
    return acc;
  });
}

console.log(calcGCD(10)); // 10
console.log(calcGCD(103, 27)); // 1
console.log(calcGCD(21, 15, 18)); // 3
console.log(calcGCD(104, 96, 36, 88)); // 4
