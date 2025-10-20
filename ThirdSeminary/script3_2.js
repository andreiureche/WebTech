//Implementați o funcție de formatare a unui string care suportă parametrii numiți; 
//de exemplu "un {substantiv} este {adjectiv}" să poată fi formatat în "un căluț este drăguț".
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