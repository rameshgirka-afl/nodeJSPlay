import fs from 'node:fs';

let tl_code_log = null
const printFiveMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await response.json();
  fs.writeFile('callbacks.log',JSON.stringify(pokemon,2),(err) => {
    if (err) throw new Error ()
    console.log(pokemon)
  })
  //const moves = pokemon.moves.map(({ move }) => move.name);
  //console.log(moves.slice(0, 5));
};

//Function expression needs to be evaluated
printFiveMoves(100)

//console.log(tl_code_log)