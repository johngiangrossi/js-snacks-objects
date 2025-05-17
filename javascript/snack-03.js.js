console.log('JSnack 3');

/*
Crea un array di oggetti che rappresentano degli animali.
 Ogni animale ha un nome, una famiglia e una classe.
 Es:
 [ 
  { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ }, 
  { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ }, 
  { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ }, 
 ]
Crea un nuovo array con la lista dei mammiferi
*/

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];   //array(object)

console.log(animali);
const animaliMammiferi = [];  //array(object)


for (let i = 0; i < animali.length; i++) {
    const animale = animali[i];   //array(object)
    // console.log(i, animale);  

    if (animale.classe === 'mammiferi') {
        animaliMammiferi.push(animale)
    } 
}
console.log(animaliMammiferi);

   