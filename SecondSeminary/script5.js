const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.error("Te rog introdu un număr întreg pozitiv!");
    process.exit(1);
}

function fibonacci(num) {
    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(`Termenul ${n} din șirul Fibonacci este: ${fibonacci(n)}`);
