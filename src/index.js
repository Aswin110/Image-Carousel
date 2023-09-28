const sliders = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev =document.querySelector('.prev');
const next =document.querySelector('.next');

let initialValue = 1;
change(-1);

function change(n){
	initialValue += n;
	if(initialValue > sliders.length - 1){
		initialValue = 0;
	}
	if(initialValue < 0 ){
		initialValue = sliders.length - 1;
	}  

	for (let i=0; i<sliders.length; i++){
		sliders[i].style.display = 'none';
	}
	for(let i=0; i<dots.length; i++){
		dots[i].classList.remove('active');
	}
	sliders[initialValue].style.display = 'block';
	dots[initialValue].classList.add('active');
}

prev.onclick = function(){change(-1);};
next.onclick = function(){change(1);};
dots.forEach(dot =>{
	dot.addEventListener('click', function(){
		initialValue = parseInt(this.id);
		changeDot();
	});
});

function changeDot(){
	console.log('inside changeDot');

	for (let i=0; i<sliders.length; i++){
		sliders[i].style.display = 'none';
	}
	for(let i=0; i<dots.length; i++){
		dots[i].classList.remove('active');
	}
	sliders[initialValue].style.display = 'block';
	dots[initialValue].classList.add('active');
}