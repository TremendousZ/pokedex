
$(document).ready(startUp);


function startUp() {
    $('.enter').on('click' , getPokemonDummyData( pokeDummyData ));
    // $(".keyPad").on('click', ".keypad > button", enterNumber);
    
}


// function getPokemon( ){
//     console.log("AJAX initiated");
//     var ajaxCall = {
//         dataType: "jsonp",
//         url: `http://pokeapi.co/api/v2/pokemon/56`,
//         method: 'get',
//         success: loadPokemonData

//     }
//     $.ajax(ajaxCall);
// }


function getPokemonDummyData( response ) {
    var nameOfPokemon = response.name;
    $("#pokemonName").text(nameOfPokemon);
    var pokemonWeight = response.weight;
    $('#weight').text(` Weight: ${pokemonWeight}`);
    var pokemonImage = response.sprites.front_default; 
    $('#pokemonImage').attr("src", pokemonImage);
    var pokemonHeight = response.height;
    $('#height').text(`Height: ${pokemonHeight}`);
    var pokeNumber = response.id;
    $('#pokeNumber').text(pokeNumber);  
    var pokeType = response.types[0].type.name;
    $('#type').text( `Type: ${pokeType}`); 

}


// function loadPokemonData( response ) {
//    //need picture, number, name, height, weight, ability, type,  
//     var nameOfPokemon = response.name;
//     $("#pokemonName").text(nameOfPokemon);
//     var pokemonWeight = response.weight;
//     $('#weight').text(pokemonWeight);
//     var pokemonImage = response.sprites.front_default; 
//     $('#pokemonImage').src(pokemonImage);
//     var pokemonHeight = response.height;
//     $('#height').text(pokemonHeight);
//     var pokeNumber = response.id;
//     $('#pokeNumber').text(pokeNumber);
// }

// http://pokeapi.co/api/v2/pokemon/ <------number


