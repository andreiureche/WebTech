//Implementați o funcție de formatare a unui string care suportă parametrii numiți; 
//de exemplu "un {substantiv} este {adjectiv}" să poată fi formatat în "un căluț este drăguț".
const formatareString = (stringInitial, ...format) => {
    stringModificat = stringInitial;
    const cuvinteInlocuite = [...stringInitial.matchAll(/{([^}]+)}/g)].map(m => m[1]);
    for (let i = 0; i < cuvinteInlocuite.length; i++) {
        stringModificat = stringModificat.replace(`{${cuvinteInlocuite[i]}}`, format[i] ?? " ");
    }
    return stringModificat;
}

console.log(formatareString("un {substantiv} este {adjectiv}","calut","dragut"));
