(self['webpackChunkimageslider'] = self['webpackChunkimageslider'] || []).push([['index'],{

	/***/ './src/index.js':
	/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
	/***/ (() => {

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

		/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId));
	/******/ var __webpack_exports__ = (__webpack_exec__('./src/index.js'));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZXNsaWRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlJyk7XG5jb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdHMnKTtcbmNvbnN0IHByZXYgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2Jyk7XG5jb25zdCBuZXh0ID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpO1xuXG5jb25zb2xlLmxvZygnaGknKTtcbmxldCBpbml0aWFsVmFsdWUgPSAxO1xuY2hhbmdlKDApO1xuXG5mdW5jdGlvbiBjaGFuZ2Uobil7XG5cdGluaXRpYWxWYWx1ZSArPSBuO1xuXHRmb3IgKGxldCBpPTA7IGk8c2xpZGVycy5sZW5ndGg7IGkrKyl7XG5cdFx0c2xpZGVyc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cdHNsaWRlcnNbaW5pdGlhbFZhbHVlXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0ZG90c1tpbml0aWFsVmFsdWVdLmNsYXNzTmFtZSArPSAnYWN0aXZlJztcbn1cblxucHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZSgtMSkpO1xubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZSgxKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9