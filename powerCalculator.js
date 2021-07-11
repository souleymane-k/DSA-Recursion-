function powerCalculator (base, exponent){
console.log(base, exponent);
//base
if(exponent < 0){
    return "exponent should be >= 0"
}
if(exponent === 1){
    return base
}
// recursive

  return base * powerCalculator(base, exponent-1);

}
const result = powerCalculator(10, 3);
console.log(result);