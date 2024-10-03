// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  const newStrArray = input.split(" ");
  const charCodeArray = (element) => element.charCodeAt() - 96;
  const reduceArray = (acc, cv) => cv + acc;
  const splitNumArray = (element) => {
    const array = element.split("");
    return array.map(charCodeArray).reduce(reduceArray);
  };
  const converNumArray = newStrArray.map(splitNumArray);
  const sortNumArray = converNumArray.toSorted((a, b) => b - a);

  converNumArray.filter((element, index) => {
    if (element == sortNumArray[0]) {
      return (searchMaxToWord = newStrArray[index]);
    }
  });
  return searchMaxToWord;
}
console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there
