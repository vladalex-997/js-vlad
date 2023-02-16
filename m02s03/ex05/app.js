/**
 * Folosind evenimentul resize al obiectului window,
 * afiseaza o alerta care sa contina mesajul:
 * “Fereastra si-a schimbat dimensiunea.”
   Folosind evenimentul resize si proprietatea
   innerWidth al obiectului window, afiseaza intr-un
   paragraf in DOM noua latime a ferestrei dupa fiecare eveniment de resize.
   Folosind evenimentul resize si proprietatea
   innerWidth al obiecutului window, afiseaza in
   alt paragraf mesajul: “Fereastra si-a schimbat dimensiunea orizontala.”
 */

const container = document.getElementById('container');
const logMessage = (message = '') => {
  const p = document.createElement('p');
  p.innerText = message;

  container.prepend(p);
};

let initialWindowWidth = window.innerWidth;
let initialWindowHeight = window.innerHeight;

//  logMessage(initialWindowWidth);

function calculateWindowSurface(width = 0, height = 0) {
  return width * height;
}

window.addEventListener(`DOMContentLoaded`, () => {
  let messageload = calculateWindowSurface(
    initialWindowWidth,
    initialWindowHeight,
  );
  logMessage(`Suprafata la momentul incarcarii: ${messageload}`);
});

window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  let message = newWidth;
  let message2 = newWidth;
  let message3 = ``;

  if (newWidth !== initialWindowWidth || newHeight !== initialWindowHeight) {
    message = `Fereastra si-a schimbat dimensiunea: ${newWidth} x ${newHeight}`;
    message2 = `Fereastra si-a schimbat dimensiunea orizontala / verticala`;
    message3 = `Fereastra are acum suprafata de ${calculateWindowSurface(
      newWidth,
      newHeight,
    )} pixeli.`;
    initialWindowWidth = newWidth;
    initialWindowHeight = newHeight;
  }

  logMessage(message);
  logMessage(message2);
  logMessage(message3);
});
