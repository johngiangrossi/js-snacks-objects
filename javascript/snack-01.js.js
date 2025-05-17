console.log('JSnack 1');


/*
Crea un array composto da 10 automobili.
 Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
 alimentazione (benzina, diesel, gpl, elettrico, metano).
 Dividi le automobili in 3 array separati: nel primo array solo le auto a
 benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 Infine stampa separatamente i 3 array
 */
const automobili = [
    { marca: "Fiat", modello: "500", alimentazione: "benzina" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Tesla", modello: "modello 3", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "BMW", modello: "X5", alimentazione: "diesel" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" },
    { marca: "Hyundai", modello: "Ioniq", alimentazione: "elettrico" },
    { marca: "Mercedes", modello: "A-Class", alimentazione: "benzina" },
    { marca: "Audi", modello: "Q5", alimentazione: "metano" }
  ];    //array(object)
  
console.log(automobili);
const automobiliBenzina = [];  //array(object)
const automobiliDiesel = [];  //array(object)
const automobiliVari = [];   //array(object)

for (let i = 0; i < automobili.length; i++) {
    const automobile = automobili[i];   //array(object)
    // console.log(i, automobile);  

    if (automobile.alimentazione === 'benzina') {
        automobiliBenzina.push(automobile)
    } else if (automobile.alimentazione === 'diesel') {
        automobiliDiesel.push(automobile)
    } else {
        automobiliVari.push(automobile)
    }
}
console.log(automobiliBenzina);
console.log(automobiliDiesel);
console.log(automobiliVari);

