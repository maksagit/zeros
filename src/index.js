module.exports = function getZerosCount(number) {
  // example: 100! ==> x = 100 / 5 == 20, y = 100 / 25 == 4, ==> 20+4 == 24zero;
  var zerosCount= 0;
  var i = 5; 

  for (i; number/i>1; i*=5) {
    zerosCount+= Math.floor(number/i);
  }
 
  return zerosCount; 
}