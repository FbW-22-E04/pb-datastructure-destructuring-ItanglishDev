// Ex 1

const fruit = "banana"
const vegetable = "cucumber"
const food = ["bread", "cakes", "pizza"]

// Ex 2


const costumes = {
  fran: "witch",
  mazen: "clown",
  antonio: "queen"
}

const fran = costumes.fran
const mazen = costumes.mazen
const antonio = costumes.antonio
console.log(fran, mazen, antonio);

// Ex 3

const bandMusician = {
  nameBand: "Red Hot Vhilli",
  hit: "sweet child of mine",
  nationality: "god knows",
  genre: "who cares"
}

function displayAll() {
  console.log(`${bandMusician.nameBand} is a ${bandMusician.nationality} singer/songwriter.The musician sings ${bandMusician.genre} and their greatest hits is ${bandMusician.hit}`);
}

displayAll()