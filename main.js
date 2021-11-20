let progress = document.querySelector("#progressbar");
function imgSlider(anything) {
  document.querySelector(".coffe__img").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.backgroundColor = color;
}

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
});
