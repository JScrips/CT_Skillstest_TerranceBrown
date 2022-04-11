const mtnbtn = document.querySelector("#mountain-one-button");
const mtnbtn2 = document.querySelector("#mountain-two-button");
const slides = document.querySelectorAll(".slide");
const currentSlide = document.querySelector("#current");
const leftbtn = document.querySelector(".left-button");
const rightbtn = document.querySelector(".right-button");
const dots = document.querySelectorAll(".dot");
let i = 1;

leftbtn.addEventListener("click", function () {
  let currentDot = dots[i];
  let prevDot = dots[i + 1];

  currentSlide.innerHTML = slides[i].innerHTML;

  i--;
  if (i < 0) {
    i = slides.length - 1;
  }
  console.log(i);
});

rightbtn.addEventListener("click", function () {
  let currentDot = dots[i];
  let prevDot = dots[i + 1];

  currentSlide.innerHTML = slides[i].innerHTML;
  i++;
  if (i >= slides.length) {
    i = 0;
  }
  console.log(i);
});

mtnbtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (mtnbtn.classList.contains("active")) {
    console.log("currently active");
  } else {
    mtnbtn.classList.add("active");
    document.querySelector("#mountain-one-button").classList.add("bg-gray-300");
    document.querySelector("#team-tab-pane-one").classList.remove("hidden");
    mtnbtn2.classList.remove("active");
    document.querySelector("#team-tab-pane-two").classList.add("hidden");
    document
      .querySelector("#mountain-two-button")
      .classList.remove("bg-gray-300");
  }

  console.log(mtnbtn.classList);
});

mtnbtn2.addEventListener("click", function (event) {
  event.preventDefault();

  if (mtnbtn2.classList.contains("active")) {
    console.log("currently active");
  } else {
    mtnbtn2.classList.add("active");
    document.querySelector("#mountain-two-button").classList.add("bg-gray-300");
    document.querySelector("#team-tab-pane-two").classList.remove("hidden");
    mtnbtn.classList.remove("active");
    document.querySelector("#team-tab-pane-one").classList.add("hidden");
    document
      .querySelector("#mountain-one-button")
      .classList.remove("bg-gray-300");
  }
});
