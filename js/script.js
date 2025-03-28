// SNACK 1: 
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare in console la bici con peso minore.

// creo l'array 
const cycles = [
  {
    brand: "Atala",
    weight: 3000
  },
  {
    brand: "Pinarello",
    weight: 2800
  },
  {
    brand: "Legnano",
    weight: 2200
  },
  {
    brand: "Graziella",
    weight: 3800
  },
];

// definisco le variabili di controllo
let lessWeight = cycles[0].weight;
let lighter;

// ciclo per determinare la più leggera
for(i=0; i<cycles.length; i++){
  if(cycles[i].weight < lessWeight){
    lighter = cycles[i];
    lessWeight = cycles[i].weight
  }
}

// stampo in console
console.log(lighter.brand + " è la bici più leggera (" + lessWeight + " gr).");