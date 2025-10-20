//Reimplementați metoda reduce(reduceleft) ca o funcție globală.
const vector = [1,2,3,4,5,6,7,8,9,10];

const reduce = (array, expresie, valoareStart) => {
    let suma = 0;
    for(let i = valoareStart; i<array.length; i++){
        suma += array[i];
    }
    return suma;
}

const suma = reduce(vector, (first,second) => first+second, 0);
console.log(suma);