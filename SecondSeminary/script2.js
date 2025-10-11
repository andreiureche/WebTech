function caractereDiferite(string1, string2){
    if(string1.length!=string2.length)
        return -1;
    let contor=0;
    for(let i=0;i<string1.length;i++)
        if(string1[i]!=string2[i])
            contor++;
    return contor;
}

console.log(caractereDiferite("masina1","masina2"));
console.log(caractereDiferite("Maria","Ana"));
console.log(caractereDiferite("test","tent"));