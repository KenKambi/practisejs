
const peoples = [{
    name: "Peter Jones",
    rank: "Intern",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis iaculis iaculis. Nullam feugiat fringilla varius. Ut vitae arcu quis dui malesuada facilisis."

},
{
    name: "Jane Ros",
    rank: "Intern",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis iaculis iaculis. Nullam feugiat fringilla varius. Ut vitae arcu quis dui malesuada facilisis."

},
{
    name: "Doe John",
    rank: "Intern",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis iaculis iaculis. Nullam feugiat fringilla varius. Ut vitae arcu quis dui malesuada facilisis."

}];

let textContent = '';

peoples.forEach((people) =>{
    //console.log(peoples[1]);

    textContent += `
        <div class="box ">
            
            <div> ${people.name}</div>
            <span> ${people.rank}</span>

            <p>
                ${people.text}
            </p>

                
        </div>
    `;
    

});

let innerText = document.querySelector('.js-box')
innerText.innerHTML = textContent;
console.log(textContent);






document.getElementById('back').addEventListener('click', () => {
    console.log('Back');
    


});

document.getElementById('next').addEventListener('click', () => {
    console.log('Next');
})


function supriseMe(){
    const red = Math.random();
    console.log(red);
};

console.log(Math.floor(Math.random()*10));

document.getElementById('suprise').addEventListener('click', () => {
    console.log('Random');
});

