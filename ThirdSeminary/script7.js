//Dat fiind un array de numere scrieți o funcție pentru a calcula media lor folosind reduce

const vectorNumere = [1,2,3,4,5,6,7,8,9,10,11];

const calculMedie = (vector) => {
    let suma = vector.reduce((first,second) => first+second, 0);
    return medie = suma/vector.length;
}

console.log(calculMedie(vectorNumere));