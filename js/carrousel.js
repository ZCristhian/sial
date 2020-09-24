const fila = document.querySelector('.modules');
const peliculas = document.querySelectorAll('.modules__item');

var arrowLeft = document.getElementById('arrowLeft');
var arrowRight = document.getElementById('arrowRight');

arrowRight.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth;
});

arrowLeft.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;
});

// Hidden Scroll Bar on Navigator diferent to Chrome
var nameNavigator2 = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
if (!nameNavigator2) {
  document.getElementById('hidden-scroll').style.cssText = "display: block; position: absolute; width: 100%; height: 20px; background:#1e1e1e; bottom: 0;";
}