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

const nav = document.getElementById('main-nav');
const ticketsLink = nav.querySelector('#nav-tickets a');
const otherItems = [...nav.querySelectorAll('li')].filter(li => li.id !== 'nav-tickets');

otherItems.forEach(li => {
  li.addEventListener('mouseenter', () => {
    ticketsLink.classList.remove('text-white', 'bg-[#ee7202]');
    ticketsLink.classList.add('text-[#3d6ef9]');
    console.log("test");
  });
});

nav.addEventListener('mouseleave', () => {
  ticketsLink.classList.remove('text-[#3d6ef9]');
  ticketsLink.classList.add('text-white', 'bg-[#ee7202]');
});