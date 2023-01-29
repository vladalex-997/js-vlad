var i = 8;

// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// do {
//   i++;

//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// } while (i < 100);

// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

// do {
//   console.log(i);
//   i++;
// } while (i < 52);

// do {
//   console.log(i);
//   if (i === 12) {
//     break;
//   }
//   i++;
// } while (i <= 52);

// do {
//   console.log(i);
//   if (i % 2 === 0) {
//     continue;
//   }
//   i++;
// } while (i <= 32);

var userInput1 = prompt(`Introdu un numar`);
var userInput2 = prompt(`Introdu o limita inferioara`);
var userInput3 = prompt(`Introdu o limita superioara`);

i = userInput2;
do {
  if (i % userInput1 === 0) {
    console.log(i);
  }
  i++;
} while (i <= userInput3);
