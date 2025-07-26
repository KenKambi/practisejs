//////////// COUNTER   ///////////
//bring the html to javascript
const runNumber = document.querySelector('.js-number');
const decrease = document.getElementById('dec');
const reset = document.getElementById('reset');
const increase = document.getElementById('inc');

//functions for each button
decrease.addEventListener('click', () => {
    const ans = (runNumber.textContent-1);
  
    runNumber.textContent = ans;
});

reset.addEventListener('click', () => {
    runNumber.textContent = 0;
});

increase.addEventListener('click', () => {
    const currentNo = parseInt(runNumber.textContent);
    const newNo = (currentNo + 1);
    runNumber.textContent = newNo;
    console.log(newNo);
});