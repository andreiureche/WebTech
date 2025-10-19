const formatareString = (stringInitial, ...format) => {
    let vectorCuvinte = stringInitial.split(" ");
    let indexFormat = 0;
    for(let i=0;i<vectorCuvinte.length;i++) {
        if(/\{.*\}/.test(vectorCuvinte[i])){
            vectorCuvinte[i] = format[indexFormat];
            indexFormat++;
        }
    }
    const stringModificat = vectorCuvinte.join(" ");
    return stringModificat;
}

console.log(formatareString("un {substantiv} este {adjectiv}","calut","dragut"));