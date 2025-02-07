//alert("Hello");

const videoControl = document.querySelector("video");
const controlBtn = document.querySelector(".btn");

controlBtn.addEventListener("click", () => {
    videoControl.pause();
})