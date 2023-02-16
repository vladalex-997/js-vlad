const box = document.querySelector('.box');
const controlButton = document.querySelector('.control');
const animationClass = 'animate-class';
const lightButton = document.querySelector('.light');

setTimeout(() => {
  // box.classList.add(animationClass);

  box.classList.toggle(animationClass);

  // callback hell
  setTimeout(() => {
    // box.classList.remove(animationClass);
    box.classList.toggle(animationClass);
  }, 4 * 1000);
}, 6 * 1000);

controlButton.addEventListener('click', (event) => {
  // this nu este elementul pe care e pus handlerul
  const controlButton = event.currentTarget;
  const box = controlButton.previousElementSibling;

  if (box.classList.contains(animationClass)) {
    // box.classList.remove(animationClass);
    box.classList.toggle(animationClass);
    controlButton.innerText = 'Aplica';
  } else {
    // box.classList.add(animationClass);
    box.classList.toggle(animationClass);
    controlButton.innerText = 'Elimina';
  }
});

lightButton.addEventListener(`click`, () => {
  box.setAttribute('style', 'background-color: #000;');
});
