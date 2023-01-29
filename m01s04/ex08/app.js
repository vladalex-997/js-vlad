var i = 5;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// while (i < 100) {
//   console.log(i);

//   i++;
// }

// while (i < 100) {
//   i++;

//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// }

// while (i <= 67) {
//   console.log(i);
//   i++;
// }

// while (i < 67) {
//   console.log(i);
//   i++;
// }

// while (i <= 67) {
//   console.log(i);
//   if (i === 12) {
//     break;
//   }
//   i++;
// }

// while (i <= 32) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);

//   i++;
// }

var userInput1 = prompt(`Introdu un numar`);
var userInput2 = prompt(`Introdu o limita`);

while (i <= userInput2) {
  if (i % userInput1 === 0) {
    console.log(i);
  }
  i++;
}
