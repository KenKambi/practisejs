const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'A', 'B', 'C', 'D', 'E', 'F'];

const text = document.querySelector('.js-hex-code');

document.getElementById('click').addEventListener('click', () => {
   
    let hexy = '#';
    for(let i=0; i<6; i++){
        hexy += hex[getRandomNumber()];
    }

    //change the background color on html
    document.body.style.backgroundColor = hexy;
    text.textContent = hexy;

    console.log (hex[getRandomNumber]);
    
});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
    
}



