/**
 *  Adauga un event handler numit de click pe butonul
 * .btn care sa afiseze o alerta cu mesajul:
 * “Butonul a fost apasat”.
    Folosind evenimentul de resize al ferestrei,
    elimina event handlerul de pe buton de
    fiecare data cand fereastra se afla sub
    latimea de 650 pixeli.
    Pe acelasi eveniment de resize, adauga event
    handlerul cand fereastra este mai mare de 650 pixeli.
    Folosind evenimentul de DOMContentLoaded,
    aplica verificarile si cand fereastra se
    incarca, astfel incat daca aceasta s-a
    incarcat sub latimea data, handlerul sa
    nu ruleze iar daca este peste latimea data,
    acesta sa ruleze.
 */

const button = document.getElementsByClassName('btn')[0];
const breakPoint = 650;
// function expressions are NOT hoisted
const clickHandler = () => {
  alert('Butonul a fost apasat');
};

const resizeHandler = () => {
  console.log('resize');
  const windowWidth = window.innerWidth;

  if (windowWidth < breakPoint) {
    button.removeEventListener('click', clickHandler);
  }

  if (windowWidth >= breakPoint) {
    button.addEventListener('click', clickHandler);
  }
};
window.addEventListener('resize', resizeHandler);

document.addEventListener('DOMContentLoaded', resizeHandler);
