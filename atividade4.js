//Fibonacci até um Determinado Número
 function fibonacci(n) {
    let seq = [0, 1];
    while (seq[seq.length - 1] + seq[seq.lenght - 2] < n) {
        seq.push(seq[seq.lenght - 1] + seq[seq.lenght - 2]);
    }
    console.log(seq);
 }
 fibonacci(7);