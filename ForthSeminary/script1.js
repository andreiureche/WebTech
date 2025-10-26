class SirPar {
  constructor(start) {
    this.curent = start % 2 === 0 ? start : start + 1;
  }

  next() {
    const valoareDeReturnat = this.curent;
    this.curent += 2;
    return valoareDeReturnat;
  }
}

const secventa = new SirPar(3);
console.log(secventa.next());