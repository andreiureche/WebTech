function frecventeRelative(text) {
    const litere = text.replace(/\s+/g, "").toLowerCase().split("");
    const frecvente = {};
    for (const litera of litere) {
        if (/[a-zăâîșț]/i.test(litera)) { 
            frecvente[litera] = (frecvente[litera] || 0) + 1;
        }
    }
    const total = Object.values(frecvente).reduce((a, b) => a + b, 0);
    for (const litera in frecvente) {
        frecvente[litera] = (frecvente[litera] / total).toFixed(3);
    }
    return frecvente;
}

const text = "Ana are mere rosii si mari";
console.log(frecventeRelative(text));
