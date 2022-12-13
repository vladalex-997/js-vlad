var globalVariable = 'Ma aflu in contextul global';

if (true) {
  const localVariable = 'Ma aflu in contextul local';
  const globalVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
}

console.log(globalVariable);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

console.log(i);
