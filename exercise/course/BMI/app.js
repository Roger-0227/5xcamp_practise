document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    const height = document.querySelector("#bodyHeight").value;
    const weight = document.querySelector("#bodyWeight").value;
    const result = document.querySelector("#resultText");
    var w = parseInt(weight);
    var h = parseInt(height) / 100;
    var bmi = (w / (h * h)).toFixed(2);
    console.log(h);
    console.log(w);
    console.log(bmi);
    result.textContent = bmi;
  });
});
