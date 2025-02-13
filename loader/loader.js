//alert("Hello");

let videoControl = document.querySelector(".video");
let btnControl = document.querySelector(".btn");
let preloader = document.querySelector(".preloader");
let txt = document.querySelector('.text');

btnControl.addEventListener("click", () => {
  videoControl.pause();
  //console.log(preloader.classList.toggle('hide-preloader'));
  console.log("Video Paused");
  txt.classList.toggle('text-change');
});

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
