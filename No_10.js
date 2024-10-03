// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  const spiltAarray = num.toString().split("");
  const newArray = [];
  const resetArray = (element, index, array) => {
    if (element > 0 && index !== array.length - 1) {
      const addZero = "1".padEnd(array.length - index, "0");
      newArray.push(`${addZero} x ${element}`);
    } else if (element > 0 && index == array.length - 1) {
      newArray.push(element);
    }
  };
  spiltAarray.filter(resetArray);
  return newArray.join(" + ");
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8
