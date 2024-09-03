const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]
const ourHeros = ["abu-sayed", "mugdho"]

// marvel_heros.push(dcHeros)

// console.log(marvelHeros);
// console.log(MarvelHeros[3]);

// const allHeros = mmarvelHeros.concat(dcHeros, ourHeros)
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros, ...ourHeros]
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)

// console.log(realAnotherArray);

// console.log(Array.isArray("Fuad"));
// console.log(Array.from("Fuad"));
// console.log(Array.from({name: "Fuad"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
