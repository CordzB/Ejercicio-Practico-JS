function descomponerEnFactoresPrimos(numero) {
    const factores = [];
    let divisor = 2;

    while (numero > 1) {
        while (numero % divisor === 0) {
            factores.push(divisor);
            numero /= divisor;
        }
        divisor++;

        if (divisor * divisor > numero && numero > 1) {
            factores.push(numero);
            break;
        }
    }

    return factores;
}

console.log(descomponerEnFactoresPrimos(120)); 
console.log(descomponerEnFactoresPrimos(45)); 
console.log(descomponerEnFactoresPrimos(77));
console.log(descomponerEnFactoresPrimos(97)); 
