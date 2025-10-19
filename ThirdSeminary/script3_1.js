const formatareString = (stringInitial, ...format) => {
    stringModificat = stringInitial;
    const cuvinteInlocuite = [...stringInitial.matchAll(/{([^}]+)}/g)].map(m => m[1]);
    for (let i = 0; i < cuvinteInlocuite.length; i++) {
        stringModificat = stringModificat.replace(`{${cuvinteInlocuite[i]}}`, format[i] ?? " ");
    }
    return stringModificat;
}

console.log(formatareString("un {substantiv} este {adjectiv}","calut","dragut"));
