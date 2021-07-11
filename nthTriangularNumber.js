function NthTriangularNumber(nDots){
    if(nDots === 1){
        return nDots;
    }
    return nDots + NthTriangularNumber(nDots-1);
}

let nDots = 10;
console.log(NthTriangularNumber(nDots))
