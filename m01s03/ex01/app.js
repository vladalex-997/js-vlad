var object = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
};

console.warn(`
Folosing codul din index.html, introdu
datele tale si afiseaza in consola numele mic si varsta
`);

console.log(object.name);
console.log(object.age.toString());

console.warn(`
Afiseaza fraza "Ma numesc xxx yyy si am xx ani."
in consola folosing operatorul de concatenare
`);

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.warn(``);

console.log((2022 - object.age).toString());
