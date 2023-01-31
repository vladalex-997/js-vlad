const button = document.getElementById(`query`);
const paragraphElement = document.getElementById(`message`);
var glo;
button.addEventListener('click', function () {
  glo = prompt('Introdu Varsta');
  updatepage();
});

function updatepage() {
  console.log(`Ai ${glo} ani.`);

  paragraphElement.innerText = `Ai ${glo} ani.`;
}
