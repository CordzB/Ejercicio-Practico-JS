// Función para calcular el número de Fibonacci en la posición n
console.log("Ejemplos de cálculo del número de Fibonacci");
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Ejemplos de uso
console.log("fibonacci de 0");
console.log(fibonacci(0)); // 0
console.log("fibonacci de 1");
console.log(fibonacci(1)); // 1
console.log("fibonacci de 2");
console.log(fibonacci(2)); // 1
console.log("fibonacci de 3");
console.log(fibonacci(3)); // 2
console.log("fibonacci de 4");
console.log(fibonacci(4)); // 3
console.log("fibonacci de 5");
console.log(fibonacci(5)); // 5
console.log("fibonacci de 6");
console.log(fibonacci(6)); // 8
console.log("fibonacci de 7");
console.log(fibonacci(7)); // 13