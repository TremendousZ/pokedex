
$(document).ready(startUp);


function startUp() {
    
}


function getPokemon( pokeNumber){
    var ajaxCall = {
        dataType: "json",
        url: `http://pokeapi.co/api/v2/pokemon/ + ${pokeNumber}`,
        method: 'get',
        success: loadPokemonData

    }

}

function loadPokemonData( response ) {
   //need picture, number, name, height, weight, ability, type,  
    var nameOfPokemon = response.name;
    var pokemonWeight = response.weight;
    var pokemonImage = response.sprites.front_default; 
    var pokemonHeight = response.height;
    var pokeNumber = response.id;
}

http://pokeapi.co/api/v2/pokemon/ <------number

