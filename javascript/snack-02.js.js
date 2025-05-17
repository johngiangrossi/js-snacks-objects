console.log('JSnack 2');

/*
A partire da un array di stringhe, crea un secondo array formattando le
 stringhe del primo array in minuscolo e con l’iniziale maiuscola.
 Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
 */

const nomi = ['pippo', 'PLUTO', 'Paperino'];   //array(string)
console.log(nomi);

const nuoviNomi = [];   //array(string)

for (let i = 0; i < nomi.length; i++) {
    let nome = nomi[i];   //string
    // console.log(`i= ${i}, ${nome}`);
    const arrayNome = nome.split('')   //array(string)
    // console.log(arrayNome)

    let nuovaParola = ''   //string
    for (let x = 0; x < arrayNome.length; x++) {
        let lettera = arrayNome[x];   //string
        // console.log(`x= ${x}, ${lettera}`);
        if (x === 0) {
            lettera = lettera.toUpperCase()
        } else {
            lettera = lettera.toLowerCase()
        };
        nuovaParola += lettera;
        // console.log(lettera);
        // console.log('-------' );
    }
    // console.log(nuovaParola);
    // console.log('-------' );
    nuoviNomi.push(nuovaParola)
}
console.log(nuoviNomi);

