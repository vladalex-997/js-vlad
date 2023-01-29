var userInput = prompt('Introdu numele tau');

var message1 = '';
var message2 = '';
var message3 = '';

var messageElement1 = document.getElementById('mes1');
var messageElement2 = document.getElementById('mes2');
var messageElement3 = document.getElementById('mes3');

if (userInput === null || userInput.trim().length === 0) {
  message1 = message2 = message3 = 'Nu ai introdus un nume';
} else {
  message1 = `Numele meu este: ${userInput}`;
  var userInputNoSpaceCount = userInput.replaceAll(` `, ``).length;
  message2 = `Numele introdus are ${userInputNoSpaceCount} caractere`;

  if (userInput.includes(`a`)) {
    message3 = `Numele introdus contine litera a`;
  } else {
    message3 = `Numele introdus nu contine litera a`;
  }
}

messageElement1.innerText = message1;
messageElement2.innerText = message2;
messageElement3.innerText = message3;
