var person = {
  firstName: 'Gigel',
  lastName: 'Marcel',
  email: 'gigelmarcel998@gmail.com',
  birthYear: 1960,
  zipCode: '222',
  pets: [
    {
      name: 'Larry',
      species: 'monkey',
      age: 30,
    },
    {
      name: 'Steven',
      species: 'nigger',
      age: 29,
    },
    {
      name: 'Carol',
      species: 'feminist',
      age: 29,
    },
  ],
};

console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a
   arrayului pets.`,
);

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2. `,
);

var currentYear = 2022;
console.log((currentYear - person.pets[1].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe
  pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent. `,
);

var difference = currentYear - person.birthYear - person.pets[0].age;
console.log(difference.toString());

console.warn(
  `Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName. `,
);

var petName = person.pets[0].name;

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);

console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`,
);

document.getElementById(
  'prop01',
).innerText = `${person.firstName},${person.pets[0].name},${person.pets[1].name},${person.pets[2].name} locuiesc toti in aceeasi casa.`;

document.getElementById('prop02').innerText = ` Diferenta de varsta este: ${
  person.pets[0].age - person.pets[2].age
}`;

document.getElementById(
  `prop03`,
).innerText = `Ma numesc ${person.firstName} ${person.lastName} m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}`;

document.getElementById('prop04').innerText = `Animalele mele s-au nascult in ${
  currentYear - person.pets[0].age
}, ${currentYear - person.pets[1].age} respectiv ${
  currentYear - person.pets[2].age
}`;
