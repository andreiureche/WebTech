// Scrieți o aplicație simplă care creează un director, un fișier în director
// și apoi șterge directorul (puteți utiliza rimraf)

import fs from "fs";
import path from "path";
import {rimraf} from "rimraf";

// Definire calea directorului si fisierului
const caleDirector = path.join(process.cwd(),"DirectorExemplu");
const caleFisier = path.join(caleDirector, "fisier.txt");

async function creareDirector() {
    try{
        // Creare director
        if (!fs.existsSync(caleDirector)){
            fs.mkdirSync(caleDirector);
            console.log(`Calea directorului: ${caleDirector}`);
        }
        // Creare fisier in director
        fs.writeFileSync(caleFisier, "Fisierul de test!");
        console.log(`Calea fisierului: ${caleFisier}`);
        // Asteptare
        await new Promise(res => setTimeout(res,1000));
        // Stergere director, utilizand rimraf
        await rimraf(caleDirector);
        console.log(`Directorul de la: ${caleDirector} ; a fost sters!`);
    }
    catch(err){
        console.error("A aparut urmatoarea eroare: ",err);
    }
}

creareDirector();