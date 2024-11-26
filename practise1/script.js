//alert('Hello');
const hex = ['red', 'green', 'blue', 'lightpink'];

document.getElementById('click').addEventListener('click', () => {
    console.log(hex[3]);
    document.body.style.backgroundColor = hex[3];
});