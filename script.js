let container = document.querySelector('.container');
let sections = Array.from(document.querySelectorAll('.container section'));
let firstColor = sections[0].getAttribute('data-color');

container.style.backgroundColor = firstColor;

var centerX = document.documentElement.clientWidth / 2;
var centerY = document.documentElement.clientHeight / 2;

window.onscroll = function() {
    changeColor();
};

let changeColor = debounce(function() {
    let elemColor = document.elementFromPoint(centerX, centerY).getAttribute('data-color');
    container.style.backgroundColor = elemColor;
}, 250)


function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};