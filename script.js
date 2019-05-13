console.log('приветики');
let container = document.querySelector('.container');
let sections = Array.from(document.querySelectorAll('.container section'));
let firstColor = sections[0].getAttribute('data-color');

container.style.backgroundColor = firstColor;

console.log(sections);
console.log(firstColor);


