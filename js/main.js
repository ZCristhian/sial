const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});

var nameNavigator = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

if(nameNavigator){
    document.getElementById('header').style.backgroundColor = '#000';
}