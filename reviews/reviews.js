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
        <div class="box js-box">
            
                <div> ${people.name}</div>
                <span> ${people.rank}</span>

                <p>
                    ${people.text}
                </p>

                
            </div>
    `;
    
    //textContent.innerHTML = people;
    document.querySelectorAll('.js-box').innerHTML = textContent;

    console.log(textContent);
});





document.getElementById('back').addEventListener('click', () => {
    console.log('OK');


});


function supriseMe(){
    const red = (Math.random());
    console.log(red);
};

