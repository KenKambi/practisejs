//alert("Hello");

const videoControl = document.querySelector("video");
const controlBtn = document.querySelector(".btn");
const preloader = document.querySelector(".preloader");



controlBtn.addEventListener("click", () => {
    videoControl.pause();
    console.log("Video Paused");
});

window.addEventListener('load', ()=>{
    preloader.classList.add('hide-preloader');
})