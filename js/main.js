const selectElement = (element) => document.querySelector(element);
const body = document.getElementById('body')

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
    body.classList.toggle('body-hidden')
});

//Compatibildad con Firefox
var nameNavigator = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
if(nameNavigator){
    document.getElementById('header').style.backgroundColor = '#000';
}