function calculateSurface() {
  switch (arguments.length) {
    case 0:
      console.log('Nu ati dat niciun parametru');
      break;
    case 1:
      console.log((arguments[0] * arguments[0]).toString());
      break;
    default:
      let result = 1;
      let length = arguments.length;

      for (i = 0; i < length; i++) {
        result = result * arguments[i];
      }
      console.log(result.toString());
      break;
  }
}
calculateSurface(6, 7);
calculateSurface(2);
