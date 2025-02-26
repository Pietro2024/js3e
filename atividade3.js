//Verificar se um número é Primo
 function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return false
 }
 console.log(ehPrimo(7));