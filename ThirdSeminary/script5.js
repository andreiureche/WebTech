//Implementați cenzurarea unui text printr-o funcție. 
//Funcția primește un șir de caractere și un dicționar sub forma unui array.
//De exemplu pentru șirul "javascript este minunat" și dicționarul ["este"] funcția va produce "javascript e**e minunat".

const dictionar = ["este", "place"];
const text = "javascript este minunat si imi place foarte mult";

const functieCenzura = (dictionary, sampleText) => {
    const vectorCuvinte = sampleText.split(" ");
    for(let i=0;i<vectorCuvinte.length;i++){
        const cuvant = vectorCuvinte[i];
        if(dictionary.includes(cuvant)){
            if(cuvant.length > 2){
                vectorCuvinte[i] = cuvant[0] + "*".repeat(cuvant.length-2) + cuvant[cuvant.length-1]
            }
            else {
                vectorCuvinte[i] = cuvant;
            }
        }
    }
    return sampleText = vectorCuvinte.join(" ");
}

console.log(functieCenzura(dictionar,text));