const sliders = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dots');
const prev =document.querySelector('.prev');
const next =document.querySelector('.next');

console.log('hi');
let initialValue = 1;
change(0);

function change(n){
	initialValue += n;
	for (let i=0; i<sliders.length; i++){
		sliders[i].style.display = 'none';
	}
	sliders[initialValue].style.display = 'block';
	dots[initialValue].className += 'active';
}

prev.addEventListener('click', change(-1));
next.addEventListener('click', change(1));