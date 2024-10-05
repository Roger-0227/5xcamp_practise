// let question = prompt("請輸入年份");

// if ((question % 4 == 0 && question % 100 !== 0) || question % 400 == 0) {
//   console.log("此為閏年");
// } else {
//   console.log("非閏年");
// }

// for (a = 1; a <= 5; a++) {
//   if (a % 2 == 1) {
//     console.log("妳好" + a);
//   }
// }
// var a = 1;
// while (a < 5) {
//   console.log("妳好" + a);
//   a++;
// }

// for (a = 1; a <= 9; a++) {
//   for (b = 1; b <= 9; b++) {
//     console.log(a + "x" + b + "=" + a * b);
//   }
// }

// for (let a = 1; a <= 5; a++) {
//   console.log(" ".repeat(5 - a) + "*".repeat(a * 2 - 1));
// }
// for (let a = 1; a <= 4; a++) {
//   console.log(" ".repeat(a - a + 3) + "*".repeat(a - a + 2));
// }

// function bmi(k, m) {
//   var bmi = k / m ** 2;
//   if (bmi < 1) {
//     return console.log(bmi.toFixed(2) + "請注意單位( 體重kg 身高m )");
//   } else if (bmi < 18.5) {
//     return console.log(bmi.toFixed(2) + " 體重過輕");
//   } else if (18.5 <= bmi && bmi < 24) {
//     return console.log(bmi.toFixed(2) + " 正常範圍");
//   } else {
//     return console.log(bmi.toFixed(2) + " 體重過重");
//   }
// }
// console.log(bmi(86, 173));

// function year(y) {
//   if (Number.isInteger(y) == false) {
//     return console.log("請確認年份");
//   } else if ((y % 4 == 0 && y % 100 !== 0) || y % 400 == 0) {
//     return console.log(y + " 此為閏年");
//   } else {
//     return console.log(y + " 非閏年");
//   }
// }
// console.log(year(1224));

// let hero = ["a", "b", "c"];

// // console.log(hero.indexOf("c"));
// // console.log(hero.includes("a"));

// for (var i = 0; i < hero.length; i++) {
//   console.log(hero[i]);
// }

// document.addEventListener("DOMContentLoaded",()=>){

// // }

const api =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
const req = new XMLHttpRequest();
req.addEventListener("load", () => {});
fetch(api)
  .then((response) => response.json())
  .then((json) => console.log(json));

//  async / await  非同步
