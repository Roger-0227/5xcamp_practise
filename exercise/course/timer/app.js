document.addEventListener("DOMContentLoaded", () => {
  const plus = document.querySelector("#plus");
  const minus = document.querySelector("#minus");
  const counter = document.querySelector("#counter");

  plus.addEventListener("click", () => {
    let v = Number(counter.value);
    v = v + 1;
    counter.value = v;
  });

  minus.addEventListener("click", () => {
    let v = Number(counter.value);
    if (v > 0) {
      v = v - 1;
      counter.value = v;
    }
  });
});
