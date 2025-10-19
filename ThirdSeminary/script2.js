const vectorNumere = [10,13,12,5,7,8,9,10,17,255,256];
const impartitor = 2;

const sumaElementeDivizibile = (vectorNumere, impartitor) => {
    const result = vectorNumere
        .filter(numarVector => numarVector % impartitor === 0)
        .reduce((prev, current) => prev + current, 0)
    return result;
}

console.log(sumaElementeDivizibile(vectorNumere,impartitor));