console.log('JSnack 4');

/*
Crea un array di oggetti che rappresentano delle persone.
 Ogni persona ha un nome, un cognome e un’età.
 Partendo da questo, crea quindi un nuovo array inserendo, per ogni
 persona, una frase (stringa) con il nome e cognome e l’indicazione se può
 guidare, in base all’età
 */

const persone = [
    { nome: 'Mario', cognome: 'Rossi', eta: 30 },
    { nome: 'Luisa', cognome: 'Bianchi', eta: 10 },
    { nome: 'Giovanni', cognome: 'Verdi', eta: 40 },
    { nome: 'Elena', cognome: 'Ferrari', eta: 17 }
];   //array(object)

console.log(persone);

personeGuidare = [];

for (let i = 0; i < persone.length; i++) {
    const persona = persone[i];   //array(object)
    console.log(i, persona);

    if (persona.eta >= 18) {
        patente = 'può guidare';
    }
    else {
        patente = 'non può guidare';
    }
    const frase = `${persona.nome} ${persona.cognome} ${patente}`
    personeGuidare.push(frase)
}
console.log(persone);
console.log(personeGuidare);


