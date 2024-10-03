// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  return str.split("_").reduce((acc, cv, index) => {
    if (index === 0) {
      return cv;
    }
    return acc + cv[0].toUpperCase() + cv.slice(1);
  }, "");
}
console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore
