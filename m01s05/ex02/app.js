function calculateRectangleArea(width, length) {
  return width * length;
}

console.warn(`
  Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 4 pe 3
`);
console.log(calculateRectangleArea(4, 3));

console.warn(`
  Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.
`);
console.log(calculateRectangleArea(5, 3));
console.log(calculateRectangleArea(3, 2));

console.warn(`
  Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.
`);
var squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);

console.warn(`Folosind functia calculateRectangleArea() afiseaza
 suprafata unui dreptunghi de 12 pe 9
`);
console.log(calculateRectangleArea(12, 9));
console.warn(`Afiseaza suprafata totala a trei dreptunghiuri
 de 15 pe 31,  8 pe 9, respectiv 10 pe 5. Foloseste variabile.
`);
var a1 = 15;
var a2 = 31;
var b1 = 8;
var b2 = 9;
var c1 = 10;
var c2 = 5;

var sum = 0;
sum =
  calculateRectangleArea(a1, a2) +
  calculateRectangleArea(b1, b2) +
  calculateRectangleArea(c1, c2);
console.log(sum);
console.warn(`Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.
`);

var anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);
