const creeazaExponentiere = () => {
  const memo = {}; // obiect pentru memoizare
  const pow = (baza, exponent) => {
    const cheie = `${baza}^${exponent}`;
    if (cheie in memo) {
      console.log(`Valoare memoizată: ${cheie} = ${memo[cheie]}`);
      return memo[cheie];
    }

    if (exponent === 0) return 1;
    if (exponent === 1) return baza;

    const rezultat = baza * pow(baza, exponent - 1);
    memo[cheie] = rezultat;
    console.log(`Calculat: ${cheie} = ${rezultat}`);
    return rezultat;
  }
  return pow;
}

const pow = creeazaExponentiere();
console.log("Rezultat final:", pow(2, 5));
console.log("Rezultat memoizat:", pow(2, 5));
console.log("Rezultat intermediar memoizat:", pow(2, 3));