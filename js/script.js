// SNACK 1: 
// Creare un array di oggetti.
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare in console la bici con peso minore.

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



// SNACK 2:
// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. 
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// creo l'array
const teams = [
  {
    teamName: "Team 1",
    points: 0,
    faultNum: 0
  },
  {
    teamName: "Team 2",
    points: 0,
    faultNum: 0
  },
  {
    teamName: "Team 3",
    points: 0,
    faultNum: 0
  },
  {
    teamName: "Team 4",
    points: 0,
    faultNum: 0
  },
  {
    teamName: "Team 5",
    points: 0,
    faultNum: 0
  },
]

// funzione numero random
rng =(min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

// assegno numeri random a points e faultNum
for(let i=0; i<teams.length; i++){
  teams[i].points = rng(0, 100);
  teams[i].faultNum = rng(0, 100);
}

// creo un nuovo array vuoto
const faultyTeams = [];

// per ogni oggetto dell'array oginale, inserisco un oggetto vuoto nel nuovo array
for(i=0; i<teams.length; i++){
  faultyTeams.push({});
  // ciclo per il numero di proprietà degli oggetti dell'array originale meno uno
  // inserisco nomi e falli nelle poprietà di ogni oggetto del nuovo array
  for(let j=0; j<Object.keys(teams).length - 1; j++){
    faultyTeams[i].teamName = teams[i].teamName;
    faultyTeams[i].faultNum = teams[i].faultNum;
  }  
}

// stampo in console gli array
console.log(teams);
console.log(faultyTeams);