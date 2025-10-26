function intercaleazaArrays(array1, array2) {
    if (array1.length !== array2.length) {
        throw new Error("Array-urile trebuie să aibă aceeași lungime!");
    }
    const rezultat = [];
    for (let i = 0; i < array1.length; i++) {
        rezultat.push(array1[i], array2[i]);
    }

    return rezultat;
}
const a = [1, 3, 5];
const b = [2, 4, 6];
console.log(intercaleazaArrays(a, b));
