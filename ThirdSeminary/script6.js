//Scrieți o funcție care primește un array de obiecte și un string 
//și returnează array-ul sortat după cheia specificată prin string.

const masini = [
    {Marca: "Mazda", Model: "3", Putere: 150},
    {Marca: "Dacia", Model: "Logan", Putere: 100},
    {Marca: "Renault", Model: "ClioRS", Putere: 200},
    {Marca: "BMW", Model: "Seria3", Putere: 250},
]

const functieSortare = (array, key) => {
    return array.sort((a,b) => {
        if(a[key] > b[key])
            return 1;
        else return -1;
    })
}

console.log(functieSortare(masini,"Marca"));