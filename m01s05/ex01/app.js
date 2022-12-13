function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const exactTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  return exactTime;
}

console.log(`${getTime()}, am ajuns la Pixellab`);
