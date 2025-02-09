//alert("Hello");

const videoControl = document.querySelector(".video");
const btnControl = document.querySelector(".btn");
const preloader = document.querySelector(".preloader");

btnControl.addEventListener("click", () => {
  videoControl.pause();
  console.log("Video Paused");
});

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
