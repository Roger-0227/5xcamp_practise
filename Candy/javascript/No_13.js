// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  const multiplier = [1, 2, 1, 2, 1, 2, 4, 1];
  const checkResult = vat.split("").reduce((acc, cv, index) => {
    if (Number(cv) * multiplier[index] >= 10) {
      cv = String(Number(cv) * multiplier[index]).split("");
      if (cv.length > 1) {
        return Number(cv[0]) + Number(cv[1]) + Number(acc);
      }
    }
    return Number(cv) * multiplier[index] + Number(acc);
  });
  return (
    (vat.split("")[6] == 7 &&
      checkResult % 5 == 0 &&
      (checkResult - 1) % 5 == 0) ||
    checkResult % 5 == 0
  );
}

console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false
