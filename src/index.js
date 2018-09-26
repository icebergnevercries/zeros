module.exports = function getZerosCount(number) {
  let countzeros = 0, degreeOfNum5 = 1, restOfNum = 0;

  while(number >= Math.pow(5, degreeOfNum5 + 1)){
    degreeOfNum5++;
  }
  
  for(i = 4; i > 0; i--){
    if(i * Math.pow(5, degreeOfNum5) < number){
      restOfNum = i;
      break;
    }
  }
  for(i = degreeOfNum5; i > 0; i--){
    countzeros += restOfNum*Math.pow(5, degreeOfNum5 - i);
  }
  
  let buff = 0;
  for(let i = Math.pow(5, degreeOfNum5)*restOfNum + 5; i <= number; i+=5)
  {
    buff = i;
    while(buff % 5 == 0)
    {
      countzeros++;
      buff = buff / 5;
    }
  } 

  return countzeros;
}
