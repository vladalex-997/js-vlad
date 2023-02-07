/**
 * Folosind elementul stage, adauga un event de mouseover care
 * sa afiseze in elementul paragraf mesajul: “Mouseul este pe scena”
 * atunci cand mouseul face hover pe aceasta.
    Folosind mouseout, afiseaza in paragraf mesajul
    “Mouseul nu este pe scena”.
    Afiseaza intr-un alt element de cate ori mouseul a fost pe scena.
 */

const stage = document.querySelector('.stage');
let entriesCounter = 0;

const log = (message = '', cssClass = 'log') => {
  let paragraph = document.querySelector(`.${cssClass}`);

  if (paragraph === null) {
    paragraph = document.createElement('p');
    paragraph.classList.add(cssClass);
    document.body.append(paragraph);
  }

  paragraph.innerText = message;
};

stage.addEventListener('mouseover', () => {
  const message = 'Mousel este pe scena';
  console.log(message);
  log(message);
  log(`Mouseul a fost pe scena de ${++entriesCounter} ori.`, 'entriesCount');
});

stage.addEventListener('mouseout', () => {
  const message = 'Mouseul NU este pe scena';
  console.log(message);
  log(message);
});
