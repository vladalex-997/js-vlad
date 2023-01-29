// for (var i = 0; i <= 100; i++) {
//   if (i % 7 !== 0) {
//     continue;
//   }

//   console.log(i);
//   console.log(`Acest numar este multiplu de 7`);
// }

// var userInput = prompt(`Introdu un numar`);

// for (var i = 0; i <= 100; i++) {
//   if (i % userInput !== 0) {
//     continue;
//   }

//   console.log(i);
//   console.log(`Acest numar este multiplu de ${userInput}`);
// }

// var userInput = prompt(`Introdu un numar`);

// for (var i = 1; i <= 1000; i++) {
//   if (i % userInput !== 0) {
//     continue;
//   }

//   console.log(i);
//   console.log(`Acest numar este multiplu de ${userInput}`);
// }

var userInput1 = prompt(`Introdu un numar`);
var userInput2 = prompt(`Introdu limita de cautare multipli`);

for (var i = 0; i <= userInput2; i++) {
  if (i % userInput1 !== 0) {
    continue;
  }

  console.log(i);
  console.log(`Acest numar este multiplu de ${userInput1}`);
}
