//alert('Hello');

const peoples = [{
    name: "Peter Jones",
    rank: "Intern",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis iaculis iaculis. Nullam feugiat fringilla varius. Ut vitae arcu quis dui malesuada facilisis."

},
{
    name: "Jane Ros",
    rank: "Intern",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis iaculis iaculis. Nullam feugiat fringilla varius. Ut vitae arcu quis dui malesuada facilisis."

}];

let textContent = '';

peoples.forEach((people) =>{
    //console.log(peoples[1]);

    textContent += `
        <div class="box">
            
                <div> ${peoples.name}</div>
                <span> ${peoples.rank}</span>

                <p>
                    ${peoples.text}
                </p>

                
            </div>
    `;
    console.log(people);
});

document.getElementById('back').addEventListener('click', () => {
    console.log('OK');

});

