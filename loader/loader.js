

let videoControl = document.querySelector(".video");
let btnControl = document.querySelector(".btn");
let preloader = document.querySelector(".preloader");
let txt = document.querySelector('.text');

//Click button to pause the video
btnControl.addEventListener("click", () => {
  videoControl.pause();
 
  txt.classList.toggle('text-change');
});

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});


