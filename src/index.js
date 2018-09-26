module.exports = function getZerosCount(number) {
  const arrayForBase = [2, 5];
  let arrayForZeros = [];

  for(let i = 0, len = arrayForBase.length, buff = 0, degreeCount = 1; i < len; i++)
  {
    while(number > Math.pow(arrayForBase[i], degreeCount)){
      buff += Math.floor(number / Math.pow(arrayForBase[i], degreeCount));
      degreeCount++;
    }
    arrayForZeros.push(buff);
    buff = 0; degreeCount = 1;
  }

  return (arrayForZeros[0] < arrayForZeros[1]) ? arrayForZeros[0] : arrayForZeros[1];
}
