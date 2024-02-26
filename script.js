const body = document.querySelector('body');
const header = document.getElementById('header');
const imageButton = document.querySelector('.image-btn');
const myImages = document.querySelector('.images');
const themeButton = document.querySelector('.theme-button');
const darkMode = document.querySelector('.dark-mode');
const lightMode = document.querySelector('.light-mode');
const logoText = document.querySelector('.logo__text');
const tikTok = document.querySelector('.t-tok');

body.style.backgroundColor = 'white';
lightMode.style.display = 'none';
darkMode.style.color = 'orangered';

themeButton.addEventListener('click', () => {
   body.style.backgroundColor = 'black';
   header.style.backgroundColor = 'white';
   logoText.style.color = 'black';
   tikTok.style.color = 'black';
   darkMode.style.display = 'none';
   lightMode.style.display = 'block';
});
lightMode.addEventListener('click', () => {
   body.style.backgroundColor = 'white';
   header.style.backgroundColor = 'black';
   logoText.style.color = 'white';
   tikTok.style.color = 'white';
   darkMode.style.display = 'block';
   lightMode.style.display = 'none';
});

myImages.style.display = 'none';

const buttonClickHandler = () => {
   const id = setTimeout(() => {
      if (myImages.style.display === 'none') {
         myImages.style.display = 'block';
      } else {
         myImages.style.display = 'none';
      }
   }, 500);

   return () => {
      clearTimeout(id);
   };
};

imageButton.addEventListener('click', buttonClickHandler);
