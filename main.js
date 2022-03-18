import './style.css'

let mainNav = document.getElementById('js-menu');
let button = document.getElementById('js-toggle-menu');
let closeButton = document.getElementById('js-close-menu');

let navLink = mainNav.getElementsByTagName("a");


button.addEventListener('click', function () {
  mainNav.classList.toggle('hidden');
  mainNav.classList.toggle('flex');
  closeButton.classList.toggle('hidden');
  button.classList.toggle('hidden');
});

closeButton.addEventListener('click', function () {
    mainNav.classList.toggle('hidden');
    mainNav.classList.toggle('flex');
    closeButton.classList.toggle('hidden');
    button.classList.toggle('hidden');
  });


for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function () {
    mainNav.classList.toggle('hidden');
    mainNav.classList.toggle('flex');    
    closeButton.classList.toggle('hidden');
    button.classList.toggle('hidden');    
  });
}
