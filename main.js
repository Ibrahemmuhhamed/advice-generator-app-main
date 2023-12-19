let advice = document.querySelector(".advice");
let num = document.querySelector(".num");
// req.open("GET", "https://api.adviceslip.com/advice");
// req.send();

let button = document.querySelector(".button");
button.addEventListener("click", () => {
  let req = new XMLHttpRequest();
  req.open("GET", "https://api.adviceslip.com/advice");
  console.log("D");
  req.send();
  req.onload = function () {
    advice.innerHTML = JSON.parse(req.responseText).slip.advice;
    num.innerHTML = JSON.parse(req.responseText).slip.id;
  };
});

console.log(JSON.parse(this.responseText).slip.advice);
