// // let a = 0;
// // function hey() {
// //   a = a + 1;
// //   console.log(a);
// //   hey();
// // }
// // hey();
// console.log([] + []); //console.log("" + "");
// console.log([] + {}); //console.log([]->{} + {}); string([])
// console.log({} + []); //console.log([] + []);
// console.log({} + {}); //console.log([] + []);

// {
//   console.log(a);
//   const a = 1;
// }
// console.log(a);
// let a = 5;
// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   setTimeout(() => console.log(a), 1);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i + "a");
//   setTimeout(() => console.log(i), 1);
// }

// var i = 5;

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   // some code
// }
// console.log(i);
// // Here i is 10

// ---------閏年計算
// let year = prompt("請輸入年份");
// if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//   console.log("此為閏年");
// } else {
//   console.log("此為平年");
// }

// let a = 1;

// while (a < 5) {
//   console.log(a);
//   a++;
// }

// for (let index = 6; index > 0; index--) {
//   if (index % 2 == 1) {
//     console.log("你好" + index);
//   }
// }

// ------九九乘法表
// math();
// function math() {
//   for (let index1 = 1; index1 <= 9; index1++) {
//     for (let index2 = 1; index2 <= 9; index2++) {
//       console.log(index1 + "x" + index2 + "=" + index1 * index2);
//     }
//   }
// }

// // ------聖誕樹
// let c = 1;
// while (c <= 1) {
//   tree();
//   c++;
// }
// function tree() {
//   for (let i = "*", x = " ", a = 1; a <= 5; a++) {
//     console.log(x.repeat(5 - a) + i.repeat(a) + i.repeat(a - 1));
//   }
//   for (let i = "*", x = " ", b = 1; b <= 2; b++) {
//     console.log(x.repeat(3) + i.repeat(3) + x.repeat(3));
//   }
//   console.log("");
// }

// // -----BMI體重質量指數
// let hight = prompt("請輸入身高 m");
// let wight = prompt("請輸入體重 kg");
// bmi(wight, hight);
// function bmi(wight, hight) {
//   if (wight < 3000 && hight < 5) {
//     let index = (wight / hight ** 2).toFixed(1);
//     check(index);
//   } else {
//     console.log("注意，身高/體重輸入錯誤");
//   }
// }
// function check(index) {
//   if (index < 18.5) {
//     console.log(index + " 體重過輕");
//   } else if (index > 18.5 && index < 24) {
//     console.log(index + " 體重標準");
//   } else if (index > 24 && index < 27) {
//     console.log(index + " 體重過重");
//   } else if (index > 27 && index < 30) {
//     console.log(index + " 輕度肥胖");
//   } else if (index > 30 && index < 35) {
//     console.log(index + " 中度肥胖");
//   } else if (index > 35) {
//     console.log(index + " 重度肥胖");
//   }
// }

// function hi(a) {
//   console.log(a);
// }

// function hey() {
//   console.log("hey");
// }

// hi(hey());

// const list = [1, 2, 3, 4];
// for (let i = 0; i < 4; i++) {
//   list[i] = list[i] * 2;
// }
// console.log(list);
// -------老師解答
// const list = [1, 2, 3, 4];
// const newList = [];
// for (let i = 0; i < 4; i++) {
//   const value = list[i] * 2;
//   newList.push(value);
// }
// console.log(list);
// console.log(newList);

// -> [2, 4, 6, 8]
// ------高級

// const list = [1, 2, 3, 4];
// const newArray = list.map((x) => {
//   return x * 2;
// });
// console.log(newArray);
// // ----------
// const a = (x) => x * 2;
// const list = [1, 2, 3, 4];
// const newArray = list.map(a);
// console.log(newArray);
// ------------------
// ------------------練習
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = (n) => {
//   return n % 2 == 0;
// };
// const newArray = list.filter(even);
// console.log(newArray);

// const list = [1, 2, 3, 4, 5];
// const n = (acc, cv) => {
//   return acc + cv;
// };
// const newArray = list.reduce(n);
// console.log(newArray);

// const list = [1, 9, 10, 3, 5];
// list.sort((a,b)=>{
//     return a - b;
// })

// ---------------------------myself

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const n = (acc, cv) => {
//   if (cv % 2 == 1) {
//     return acc + cv ** 2;
//   }
//   return acc;
// };
// const newArray = list.reduce(n, 0);
// console.log(newArray);

// ---------------------------teacher

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const odd = (n) => n % 2 == 1;
// const square = (n) => n * n;
// const sum = (acc, cv) => acc + cv;

// const result = list
//   .filter(odd) // 奇數
//   .map(square) // 平方
//   .reduce(sum); // 和

// console.log(result);

// ------------------------簡易計數器

// let plusBtn = document.querySelector("#plus");
// let minusBtn = document.querySelector("#minus");
// let counter = document.querySelector("#counter");

// plusBtn.addEventListener("click", (e) => {
//   let plus = parseInt(counter.value);
//   counter.value = plus + 1;
// });

// minusBtn.addEventListener("click", () => {
//   let minus = parseInt(counter.value);
//   if (minus > 0) {
//     counter.value = minus - 1;
//   }
// });

// ------------------------BMI計算機

// const bodyHeight = document.querySelector("#bodyHeight");
// const bodyWeight = document.querySelector("#bodyWeight");
// const resultText = document.querySelector("#resultText");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   let height = bodyHeight.value;
//   let weight = bodyWeight.value;

//   //   resultText.textContent = bmi(weight, height);
//   resultText.innerHTML = bmi(weight, height);

//   function bmi(weight, height) {
//     if (weight < 3000 && height < 5) {
//       let index = (weight / height ** 2).toFixed(1);
//       let result = check(index);
//       return result;
//     } else {
//       return "輸入錯誤";
//     }
//   }
//   function check(index) {
//     if (index < 18.5) {
//       return index + "<br>過輕";
//     } else if (index > 18.5 && index < 24) {
//       return index + "<br>標準";
//     } else if (index > 24 && index < 27) {
//       return index + "<br>過重";
//     } else if (index > 27 && index < 30) {
//       return index + "<br>輕度肥胖";
//     } else if (index > 30 && index < 35) {
//       return index + "<br>中度肥胖";
//     } else if (index > 35) {
//       return index + "<br>重度肥胖";
//     }
//   }
// });

// ----------------------------------
