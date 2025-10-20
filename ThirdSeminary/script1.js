//Folosiți metodele map și filter pentru a procesa un array de numere 
//reprezentând ani de naștere obținând vârstele peste 18 ani.
const aniNastere = [1998, 2008, 2004, 2005, 2010, 2003, 1976, 1990, 2015, 2014];
const anCurent = new Date().getFullYear();

const cineAreMajoratulFacut = (vectorAni) => {
    const rezultat = vectorAni.map(an => anCurent - an).filter(an => an >= 18);
    return rezultat;
}

console.log(cineAreMajoratulFacut(aniNastere))
