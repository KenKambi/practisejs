
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

const nameOfPerson = document.querySelector('.name');


let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPerson();
});

function showPerson(){
    const item = peoples[currentItem];
    nameOfPerson.textContent = item.name;
}

document.getElementById('back').addEventListener('click', () => {
    console.log('Back');
    let back = peoples[currentItem --];
    if (currentItem < 0 ){
        currentItem = peoples.length -1;
    };
    showPerson();



});

document.getElementById('next').addEventListener('click', () => {
    console.log('Next');
    let next = peoples[currentItem ++];
    if (currentItem > peoples.length -1 ){
        currentItem = 0;
    };
    showPerson();

})



document.getElementById('suprise').addEventListener('click', () => {
    console.log('Random');
    currentItem = (Math.floor(Math.random() * peoples.length));
    showPerson();
});

