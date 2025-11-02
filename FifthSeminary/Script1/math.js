const variabila = Math.PI;

const f1 = (a,b) =>{
    if(a%b===0)
        console.log(`Variabila ${b} divide variabila ${a}!`);
    else 
        console.log(`Nu se impart fara rest!`);
}

const f2 = (a,b) =>{
    console.log(`Suma celor doua variabile este: ${a+b}`);
}

const f3 = (a,b) =>{
    console.log(`Produsul celor doua variabile este: ${a*b}`);
}

export {variabila,f1,f2};