// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

// function sumOfSmallestValues(arr) {
//   // 實作程式碼寫在這裡
//   const one = (n) => n < 10;
//   const two = (n) => n >= 10;
//   const result1 = arr.filter(one).sort();
//   const result2 = arr.filter(two).sort();

//   if (String(result1).length >= 2) {
//     return result1[0] + result1[1];
//   } else {
//     return result1[0] + result2[0];
//   }
// }

// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// console.log(sumOfSmallestValues(list1)); // 印出 7
// console.log(sumOfSmallestValues(list2)); // 印出 19

// ------------------------------------------

// function sumOfSmallestValues(arr) {
//   // 實作程式碼寫在這裡
//   const newArray = [];
//   let add = 2;

//   for (let i = 0; i < add; i++) {
//     let index = 10 ** (i + 1);
//     let unit = (n) => n < index;
//     let result1 = arr.filter(unit).sort();
//     let count = result1.length;

//     // console.log(i);
//     // console.log(result1[i]);
//     // console.log(index);
//     // console.log(count);

//     if (count >= add) {
//       newArray.push(result1[0], result1[1]);
//       return newArray[0] + newArray[1];
//     } else if (count < add && count !== 0) {
//       newArray.push(result1[0]);
//     }
//   }
// }
// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// console.log(sumOfSmallestValues(list1)); // 印出 7
// console.log(sumOfSmallestValues(list2)); // 印出 19
// ---------------------------------------------
// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

// function sumOfSmallestValues(arr) {
//   // 實作程式碼寫在這裡
//   const newArray1 = [];
//   const newArray2 = [];
//   const reset1 = (n) => {
//     if (n < 10) {
//       newArray1.push(n);
//       //   console.log(newArray1);
//     }
//   };
//   const reset2 = (n) => {
//     if (n > 10) {
//       newArray2.push(n);
//       //   console.log(newArray2);
//     }
//   };
//   arr.filter(reset1);
//   arr.filter(reset2);

//   let newArray = newArray1.sort().concat(newArray2.sort());
//   //   console.log(newArray);
//   //   console.log(newArray1);
//   //   console.log(newArray2);
//   return newArray[0] + newArray[1];
// }
// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// console.log(sumOfSmallestValues(list1)); // 印出 7
// console.log(sumOfSmallestValues(list2)); // 印出 19

// ------------------------------------------------ok

// // 編號：CANDY-001
// // 程式語言：JavaScript
// // 題目：找出陣列裡最小的兩個值的總和
// // 例如：
// //   [15, 28, 4, 2, 43] 印出 6
// //   [23, 71, 33, 82, 1] 印出 24

// function sumOfSmallestValues(arr) {
//   let sortArray = arr.sort((a, b) => a - b);
//   return sortArray[0] + sortArray[1];
// }

// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// // console.log(sumOfSmallestValues(list1)); // 印出 7
// // console.log(sumOfSmallestValues(list2)); // 印出 19

// ------------------------------------------------
// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

// function sumOfSmallestValues(arr) {
//   // 實作程式碼寫在這裡
//   let newArray = [];
//   let min = Math.min(...arr);
//   newArray.push(min);
//   let index = arr.indexOf(min);
//   arr.splice(index, 1);
//   let mins = Math.min(...arr);
//   newArray.push(mins);
//   return newArray[0] + newArray[1];
// }
// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// console.log(sumOfSmallestValues(list1)); // 印出 7
// console.log(sumOfSmallestValues(list2)); // 印出 19

// ------------------------------------------------X

// // 編號：CANDY-001
// // 程式語言：JavaScript
// // 題目：找出陣列裡最小的兩個值的總和
// // 例如：
// //   [15, 28, 4, 2, 43] 印出 6
// // //   [23, 71, 33, 82, 1] 印出 24

// function sumOfSmallestValues(arr) {
//   let relative = function (a) {
//     for (let i = 0; i < 2; i++) {
//       let array = [];
//       if (a[i] < a[i + 1]) {
//         if (a[i + 2] < a[i + 3]) {
//           if (a[i] < a[i + 2]) {
//             if (a[i] < a[i + 4]) {
//               return a[i];
//             } else {
//               return a[i + 4];
//             }
//           } else if (a[i + 2] < a[i + 4]) {
//             return a[i];
//           } else {
//             return a[i + 4];
//           }
//         } else if (a[i + 3] < a[i]) {
//           if (a[i + 3] < a[i + 4]) {
//             return a[i + 3];
//           } else {
//             return a[i + 4];
//           }
//         }
//       } else if (a[i + 2] < a[i + 3]) {
//         if (a[i + 1] < a[i + 2]) {
//           if (a[i + 1] < a[i + 4]) {
//             return a[i + 1];
//           } else {
//             return a[i + 4];
//           }
//         } else if (a[i + 2] < a[i + 4]) {
//           return a[i + 2];
//         } else {
//           return a[i + 4];
//         }
//       } else if (a[i + 1] < a[i + 3]) {
//         if (a[i + 1] < a[i + 4]) {
//           return a[i + 1];
//         } else {
//           return a[i + 4];
//         }
//       } else if (a[i + 3] < a[i + 4]) {
//         return a[i + 3];
//       } else {
//         return a[i + 4];
//       }
//     }
//   };
//   console.log(relative(arr));
// }

// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// console.log(sumOfSmallestValues(list1)); // 印出 7
// console.log(sumOfSmallestValues(list2)); // 印出 19

// ---------------------------------------------------

// // 編號：CANDY-002
// // 程式語言：JavaScript
// // 題目：請寫一小段程式，印出連續陣列裡缺少的字元

// const chars1 = ["a", "b", "c", "d", "f", "g"];
// const chars2 = ["O", "Q", "R", "S"];

// function missingChar(chars) {
//   // 實作寫在這裡
//   let ans;
//   const index = (i) => i.charCodeAt();
//   const num = (acc, cv) => {
//     // console.log(acc);
//     // console.log(cv);
//     if (acc == cv) {
//       return acc + 1;
//     } else {
//       return (ans = acc);
//     }
//   };

//   let array = chars.map(index);
//   array.reduce(num, array[0]);
//   //   console.log(String.fromCharCode(ans));
//   return String.fromCharCode(ans);
// }

// console.log(missingChar(chars1)); // 印出 e
// console.log(missingChar(chars2)); // 印出 P

// // 提示：
// // 可使用字串的 charCodeAt 方法...

// // ---------------------------------------------ok

// // 編號：CANDY-002
// // 程式語言：JavaScript
// // 題目：請寫一小段程式，印出連續陣列裡缺少的字元

// const chars1 = ["a", "b", "c", "d", "f", "g"];
// const chars2 = ["O", "Q", "R", "S"];

// function missingChar(chars) {
//   let array = chars.map((n) => n.charCodeAt());
//   let ans;
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] + 1 !== array[i + 1]) {
//       ans = array[i] + 1;
//     }
//   }
//   return String.fromCharCode(ans);
// }

// console.log(missingChar(chars1)); // 印出 e
// console.log(missingChar(chars2)); // 印出 P

// // 提示：
// // 可使用字串的 charCodeAt 方法...

// // ----------------------------------馬同學
// // 編號：CANDY-002
// // 程式語言：JavaScript
// // 題目：請寫一小段程式，印出連續陣列裡缺少的字元

// const chars1 = ["a", "b", "c", "d", "f", "g"];
// const chars2 = ["O", "Q", "R", "S"];

// function missingChar(chars) {
//   let newArr = [];
//   for (let i = 0; i < chars.length; i++) {
//     newArr.push(chars[i].charCodeAt());
//     if (newArr[i - 1] - newArr[i] === -2) {
//       console.log(newArr[i]);
//     }
//   }
// }

// console.log(missingChar(chars1)); // 印出 e
// console.log(missingChar(chars2)); // 印出 P

// // 提示：
// // 可使用字串的 charCodeAt 方法...

// -----------------------------------------------ok

// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   const onlyZeroArray = arr.filter((e) => e === 0);
//   const otherNumArray = arr.filter((e) => e !== 0);
//   return otherNumArray.concat(onlyZeroArray);
// }

// let result = moveZerosToEnd(list);
// console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// -------------------------------------------Eric國傑(修改)

// 編號：CANDY-003
// 程式語言：JavaScript
// // 題目：完成函數的內容，把陣列裡的 0 都移到最後面

// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   //   const zeroArray = [];
//   //   const notZeroArray = [];
//   const [zeroArray, notZeroArray] = [[], []];

//   for (let i = 0; i < arr.length; i++) {
//     // if (arr[i] === 0) {
//     //   zeroArray.push(arr[i]);
//     // } else {
//     //   notZeroArray.push(arr[i]);
//     // }
//     arr[i] === 0 ? zeroArray.push(arr[i]) : notZeroArray.push(arr[i]);
//   }
//   // return notZeroArray.concat(zeroArray);
//   return [...notZeroArray, ...zeroArray];
// }

// let result = moveZerosToEnd(list);
// console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// ----------------------------------------祥文(good)

// // 編號：CANDY-002
// // 程式語言：JavaScript
// // 題目：請寫一小段程式，印出連續陣列裡缺少的字元

// const chars1 = ["a", "b", "c", "d", "f", "g"];
// const chars2 = ["O", "Q", "R", "S"];

// function missingChar(chars) {
//   for (let i = 0; i < chars.length - 1; i++) {
//     let charsfirst = chars[i].charCodeAt(0);
//     let charslast = chars[i + 1].charCodeAt(0);

//     if (charslast !== charsfirst + 1) {
//       return String.fromCharCode(charsfirst + 1);
//     }
//   }
// }
// const chars1 = ["a", "b", "c", "d", "f", "g"];
// const chars2 = ["O", "Q", "R", "S"];

// console.log(missingChar(chars1)); // 印出 e
// console.log(missingChar(chars2)); // 印出 P
// // 提示：
// // 可使用字串的 charCodeAt 方法...

// ---------------------------------------ok

// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

// function humanReadableTimer(seconds) {
//   const hour = String(Math.floor(seconds / 3600)).padStart(2, "0");
//   const minute = String(Math.floor(seconds / 60) % 60).padStart(2, "0");
//   const second = String(Math.floor(seconds % 60)).padStart(2, "0");
//   return `${hour} : ${minute} : ${second}`;
// }

// console.log(humanReadableTimer(0)); // 印出 00:00:00
// console.log(humanReadableTimer(59)); // 印出 00:00:59
// console.log(humanReadableTimer(60)); // 印出 00:01:00
// console.log(humanReadableTimer(90)); // 印出 00:01:30
// console.log(humanReadableTimer(3599)); // 印出 00:59:59
// console.log(humanReadableTimer(3600)); // 印出 01:00:00
// console.log(humanReadableTimer(45296)); // 印出 12:34:56
// console.log(humanReadableTimer(86399)); // 印出 23:59:59
// console.log(humanReadableTimer(86400)); // 印出 24:00:00
// console.log(humanReadableTimer(359999)); // 印出 99:59:59

// ---------------------------------------

// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

// function squareDigits(num) {
//   const numArray = String(num).split("");
//   return numArray.map((e) => e ** 2).join("");
// }

// console.log(squareDigits(3212)); // 印出 9414
// console.log(squareDigits(2112)); // 印出 4114
// console.log(squareDigits(387)); // 印出 96449

// // ---------------------------------------

// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

// function findDifferent(numbers) {
//   const different = (element, index, array) => {
//     if (array.indexOf(element, 1 - index) == -1) {
//       return element;
//     }
//   };
//   return Number(numbers.filter(different));
// }

// console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
// console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
// console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

// // ---------------------------------------

// // 編號：CANDY-007
// // 程式語言：JavaScript
// // 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

// function findSomeDifferent(numbers) {
//   const even = (element) => element % 2 == 0;
//   const odd = (element) => element % 2 !== 0;
//   const evenArray = numbers.filter(even);
//   const oddArray = numbers.filter(odd);
//   if (evenArray < oddArray) {
//     return Number(evenArray);
//   }
//   return Number(oddArray);
// }

// console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
// console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

// // // ---------------------------------------

// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

// function highestScoreWord(input) {
//   const newStrArray = input.split(" ");
//   const charCodeArray = (element) => element.charCodeAt() - 96;
//   const reduceArray = (acc, cv) => cv + acc;
//   const splitNumArray = (element) => {
//     const array = element.split("");
//     return array.map(charCodeArray).reduce(reduceArray);
//   };
//   const converNumArray = newStrArray.map(splitNumArray);
//   const sortNumArray = converNumArray.toSorted((a, b) => b - a);

//   converNumArray.filter((element, index) => {
//     if (element == sortNumArray[0]) {
//       return (searchMaxToWord = newStrArray[index]);
//     }
//   });
//   return searchMaxToWord;
// }
// console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
// console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
// console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there

// // // ---------------------------------------只有ＯＫ沒有糖果

// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

// function removeAnchor(url) {
//   if (url.search("#") == -1) {
//     return url.slice(0);
//   }
//   return url.slice(0, url.search("#"));
// }

// console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
// console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
// console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 5xcampus.com/courses/?page=1

// // // ---------------------------------------糖果

// // 編號：CANDY-009
// // 程式語言：JavaScript
// // 題目：移除網址中的錨點（Anchor）

// function removeAnchor(url) {
//   return url.split("#")[0];
// }

// console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
// console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
// console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 5xcampus.com/courses/?page=1

// ----------------------------------馬同學

// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

// function removeAnchor(url) {
//   return url.replace(/"|#[a-z]+/g);
//   //使用replace()並使用正規表達式,正規表達式需要用/ /包住
//   //使用正規表達式抓出“跟#[a-z],[]表示裡面任一的值,a-z表示小寫的a到z的字母
//   //+表示可以有匹配多次以上,g表示可以全局匹配,最後再用""代替值
// // }
// function removeAnchor(url) {
//   return url.replace(/"/);
// }

// function removeAnchor(url) {
//   return url.replace(/#[a-z]+/);
// }

// console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
// console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
// console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 t5xcampus.com/courses/?page=1

// ----------------------------------

// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

// function expandedForm(num) {
//   const spiltAarray = num.toString().split("");
//   //   const spiltAarray = toStrNum.split("");
//   const newArray = [];
//   const resetArray = (element, index, array) => {
//     if (element > 0 && index !== array.length - 1) {
//       //   const arrayLength = array.length;
//       const addZero = "1".padEnd(array.length - index, "0");
//       //   console.log(element);
//       //   console.log(arrayLength);
//       //   console.log(array.length);
//       //   console.log(addZero);
//       //   console.log(`${addZero} x ${element}`);
//       newArray.push(`${addZero} x ${element}`);
//     } else if (element > 0 && index == array.length - 1) {
//       newArray.push(element);
//     }
//   };
//   spiltAarray.filter(resetArray);
//   //   return spiltAarray.filter(reset);
//   return newArray.join(" + ");
// // }

// console.log(expandedForm(8)); // 印出 8
// console.log(expandedForm(25)); // 印出 10 x 2 + 5
// console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
// console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
// console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8

// ----------------------------------

// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

// function findOddElm(numbers) {
//   const sortArray = numbers.sort((a, b) => a - b);
//   const filterOdd = (element, index, array) => {
//     if ((array.lastIndexOf(element) - array.indexOf(element) - 1) % 2 != 0) {
//       if (element != array[index + 1]) {
//         return element;
//       }
//     }
//   };
//   return Number(sortArray.filter(filterOdd));
// }
// ------------詠情
// function findOddElm(numbers) {
//   const count = {};
//   numbers.forEach((num) => {
//     // console.log(num);
//     if (count[num]) {
//       console.log(num);
//       console.log(count);

//       count[num] += 1;

//       console.log(num);
//       console.log(count);
//     } else {
//       console.log(num);
//       console.log(count);

//       count[num] = 1;

//       console.log(num);
//       console.log(count);
//     }
//   });
//   return Object.keys(count).find((num) => count[num] % 2 !== 0);
// }

// console.log(findOddElm([1, 1, 2])); // 印出 2
// console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
// console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
// console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
// console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5

// ----------------------------------

// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
// //      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

// const numberReducer = (num) => {
//   for (let i = 0; i < num; i++) {
//     if (num >= 10) {
//       num = String(num)
//         .split("")
//         .reduce((acc, cv) => acc + Number(cv), 0);
//     }
//   }
//   return num;
// };

//   const reduceArray = (acc, cv) => acc + Number(cv);
//   let element = String(num).split("");
//   for (let i = 0; i < i + 1; i++) {
//     if (element.reduce(reduceArray, 0) >= 10) {
//       element = String(element.reduce(reduceArray, 0)).split("");
//       i--;
//     }
//     return element.reduce(reduceArray, 0);
//   }

// console.log(numberReducer(9527)); // 印出 5
// console.log(numberReducer(1450)); // 印出 1
// console.log(numberReducer(5566108)); // 印出 4
// console.log(numberReducer(1234567890)); // 印出 9

// ----------------------------------

// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

// const numberReducer = (num) => {
//   for (let i = 0; i < num; i++) {
//     if (num >= 10) {
//       num = String(num)
//         .split("")
//         .reduce((acc, cv) => acc + Number(cv), 0);
//     }
//   }
//   return num;
// };

// console.log(numberReducer(9527)); // 印出 5
// console.log(numberReducer(1450)); // 印出 1
// console.log(numberReducer(5566108)); // 印出 4
// console.log(numberReducer(1234567890)); // 印出 9

// ----------------------------------

// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

// function isValidVatNumber(vat) {
//   const multiplier = [1, 2, 1, 2, 1, 2, 4, 1];
//   const checkResult = vat.split("").reduce((acc, cv, index) => {
//     if (Number(cv) * multiplier[index] >= 10) {
//       cv = String(Number(cv) * multiplier[index]).split("");
//       if (cv.length > 1) {
//         return Number(cv[0]) + Number(cv[1]) + Number(acc);
//       }
//     }
//     return Number(cv) * multiplier[index] + Number(acc);
//   });
//   return (
//     (vat.split("")[6] == 7 &&
//       checkResult % 5 == 0 &&
//       (checkResult - 1) % 5 == 0) ||
//     checkResult % 5 == 0
//   );
// }

// console.log(isValidVatNumber("10458575")); // true
// console.log(isValidVatNumber("88117125")); // true
// console.log(isValidVatNumber("53212539")); // true
// console.log(isValidVatNumber("88117126")); // false

// ----------------------------------

// // 編號：CANDY-014
// // 程式語言：JavaScript
// // 題目：把鄰近的重複值去除，但仍照原本的順序排序
// // 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

// function uniqueOrder(sequence) {
//   const uniqueFilter = (element, index, array) => element !== array[index + 1];

//   if (Array.isArray(sequence)) {
//     return sequence.filter(uniqueFilter);
//   }
//   return sequence.split("").filter(uniqueFilter);
// }

// console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
// console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
// console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
// console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]

// // -----------------------------

// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

// function splitString(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i = i + 2) {
//     result.push(
//       str.split("")[i] + (str.split("")[i + 1] ? str.split("")[i + 1] : "_")
//     );
//   }
//   return result;
// }

// function splitString(str) {
//   const result = [];

//   for (let i = 0; i < str.length; i = i + 2) {
//     result.push(str.slice(i, i + 2).padEnd(2, "_"));
//   }
//   return result;
// }

// console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
// console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
// console.log(splitString("")); // []

// // -----------------------------

// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

// function toCamelCase(str) {
//   return str.split("_").reduce((acc, cv, index) => {
//     if (index === 0) {
//       return cv;
//     }
//     return acc + cv[0].toUpperCase() + cv.slice(1);
//   }, "");
// }
// console.log(toCamelCase("book")); // book
// console.log(toCamelCase("book_store")); // bookStore
// console.log(toCamelCase("get_good_score")); // getGoodScore

// // -----------------------------

// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

// function countBits(num) {
//   //   let count = 0;
//   //   for (let i = 0; i < Math.ceil(Math.log2(num)); i++) {
//   //     const numOfBits = Math.floor(num / 2 ** i);
//   //     // console.log(Math.floor(num / (2 * i)) % 2 == 1);
//   //     if (numOfBits % 2 == 1 && numOfBits != 0) {
//   //       count++;
//   //       // console.log(count);
//   //       // // console.log(Math.floor(num / 2));
//   //       // if (numOfBits == 1) {
//   //       //   console.log(i);
//   //       // }
//   // return count;
//   // }

//   return num.toString(2).replaceAll("0", "").length;
// }

// // if(num%2 == 1){
// //   return 1
// // }

// console.log(countBits(1234)); // 5
// console.log(countBits(1450)); // 6
// console.log(countBits(9527)); // 8

// // -----------------------------

// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

// function randomNumber(numFirst, numSecond = 0) {
//   // [numMax, numMin] = [Math.max(numEnd, numStart), Math.min(numEnd, numStart)];
//   return (
//     Math.floor(Math.random() * Math.abs(numSecond - numFirst)) +
//     Math.min(numFirst, numSecond)
//   );
// }

// console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
// console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字

// // -----------------------------

// 編號：CANDY-019
// 程式語言：JavaScript
// 題目：檢查是否為某個數字的平方數

// function isSquare(num) {
//   return Number.isInteger(Math.sqrt(num));
// }

// console.log(isSquare(0)); // true
// console.log(isSquare(4)); // true
// console.log(isSquare(5)); // false
// console.log(isSquare(100)); // true
// console.log(isSquare(-4)); // false
// console.log(isSquare(-1)); // false

// // -----------------------------

// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

// function xxoo(str) {
//   const matchxXChar = str.match(/[xX]/g) ? str.match(/[xX]/g) : "";
//   const matchoOChar = str.match(/[oO]/g) ? str.match(/[oO]/g) : "";
//   return matchxXChar.length === matchoOChar.length;
// }

// console.log(xxoo("ooxx")); // true
// console.log(xxoo("xxoo")); // true
// console.log(xxoo("xxooo")); // false
// console.log(xxoo("xoox")); // true
// console.log(xxoo("ooAA")); // false
// console.log(xxoo("xoXoA")); // true

// // -----------------------------

// 編號：CANDY-021
// 程式語言：JavaScript
// 題目：實作 Stack 資料結構

// class Stack {
//   arr = [];
//   constructor(num) {
//     this.num = num;
//   }
//   push(num) {
//     if (num) {
//       return this.arr.push(num);
//     }
//   }
//   pop() {
//     return this.arr.pop();
//   }
//   get size() {
//     return this.arr.length;
//   }
// }

// const stack = new Stack();
// stack.push(123);
// stack.push(456);
// stack.push();
// console.log(stack.size); // 印出 2

// const item = stack.pop(); // 取出元素
// console.log(item); // 印出 456

// stack.pop(); // 繼續取出元素
// console.log(stack.size); // 印出 0

// // -----------------------------

// 編號：CANDY-022
// 程式語言：JavaScript
// 題目：實作 Queue 資料結構

// class Queue {
//   constructor() {
//     this.item = [];
//   }
//   enqueue(item) {
//     if (item) {
//       return this.item.push(item);
//     }
//   }
//   dequeue() {
//     return this.item.shift();
//   }
//   get length() {
//     return this.item.length;
//   }
// }

// const queue = new Queue();
// queue.enqueue(123);
// queue.enqueue(456);
// queue.enqueue();
// console.log(queue.length); // 印出 2

// const item = queue.dequeue(); // 取出元素
// console.log(item); // 印出 123

// queue.dequeue(); // 繼續取出元素
// console.log(queue.length); // 印出 0

// // -----------------------------

// 編號：CANDY-023
// 程式語言：JavaScript
// 題目：算出 N 個數字的最大公因數

// function calcGCD(...numbers) {
//   return numbers.reduce((acc, cv) => {
//     while (cv !== 0) {
//       let remainder = cv;
//       cv = acc % cv;
//       acc = remainder;
//     }
//     return acc;
//   });
// }

// console.log(calcGCD(10)); // 10
// console.log(calcGCD(103, 27)); // 1
// console.log(calcGCD(21, 15, 18)); // 3
// console.log(calcGCD(104, 96, 36, 88)); // 4

// // -----------------------------

// // 編號：CANDY-024
// // 程式語言：JavaScript
// // 題目：算出 N 個數字的最小公倍數
// // 提示：可使用 023 計算最大公因數的函數

// function calcLCM(...numbers) {
//   const calcGcd = (acc, cv) => {
//     while (cv) {
//       const remainder = cv;
//       cv = acc % cv;
//       acc = remainder;
//     }
//     return acc;
//   };
//   const calcLcm = (acc, cv) => {
//     if (cv) {
//       return Math.abs(cv * acc) / calcGcd(acc, cv);
//     }
//     return acc;
//   };
//   return numbers.reduce(calcLcm);
// }

// console.log(calcLCM(10)); // 10
// console.log(calcLCM(103, 27)); // 2781
// console.log(calcLCM(21, 15, 18)); // 630
// console.log(calcLCM(104, 96, 36, 88)); // 41184

// // -----------------------------

// 編號：CANDY-025
// 程式語言：JavaScript
// 題目：
//   一般我們常見的四捨五入計算方式在統計上容易造成計算偏差
//   於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差
//   計算方式是「四捨六入五成雙」
//   當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數

// function bankersRounding(num, digits = 0) {
//   const matchNum = String(num).replace(".", "");
//   const parseRoundNum = Math.round(num * 10 ** digits) / 10 ** digits;
//   const parseFoolrNum = Math.floor(num * 10 ** digits) / 10 ** digits;

//   if (matchNum.slice(-1) == 5 && matchNum.slice(-2, -1) % 2 == 0) {
//     return parseFoolrNum;
//   }
//   return parseRoundNum;
// }

// console.log(bankersRounding(0.4)); // 0
// console.log(bankersRounding(0.6)); // 1
// console.log(bankersRounding(0.5)); // 0
// console.log(bankersRounding(1.5)); // 2
// console.log(bankersRounding(1.24, 1)); // 1.2
// console.log(bankersRounding(1.26, 1)); // 1.3
// console.log(bankersRounding(1.25, 1)); // 1.2
