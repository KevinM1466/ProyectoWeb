var btnAbrirPopup = document.getElementById('boton-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	num = document.getElementById('num'),
	btnCerrarPopup = document.getElementById('boton-cerrar-popup');

btnAbrirPopup.addEventListener('click', function () {
	overlay.classList.add('active');
	popup.classList.add('active');
	pantalla(++n);
});

btnCerrarPopup.addEventListener('click', function (e) {
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});
