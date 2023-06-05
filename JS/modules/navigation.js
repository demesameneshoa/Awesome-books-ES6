// Hide and Display Contents based on menu click

const displayMenu = document.getElementById('nav-display');
const addMenu = document.getElementById('nav-form');
const contactMenu = document.getElementById('nav-contact');
const listSection = document.querySelector('.display');
const formSection = document.querySelector('.main-form');
const contactSection = document.querySelector('.contact');

const nav = () => {
displayMenu.addEventListener('click', (e) => {
  e.preventDefault();
  listSection.classList.remove('hidden');
  formSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

addMenu.addEventListener('click', (e) => {
  e.preventDefault();
  listSection.classList.add('hidden');
  formSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
});

contactMenu.addEventListener('click', (e) => {
  e.preventDefault();
  listSection.classList.add('hidden');
  formSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
});

window.addEventListener('load', () => {
  listSection.classList.remove('hidden');
  formSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});
};

export default nav;