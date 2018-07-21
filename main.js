
$(document).ready(startUp);


function startUp() {
    $('.enter').on('click' , submitPokeNumber);
    $(".keyPad > *").on('click', enterNumber);
    
}
var pokeNumber = null;
var pokemonSearchIndex = [];

function getPokemon( number ){
    console.log("AJAX initiated");
    debugger;
    var ajaxCall = {
        dataType: "jsonp",
        url: `http://pokeapi.co/api/v2/pokemon/${pokeNumber}`,
        method: 'get',
        success: loadPokemonData

    }
    $.ajax(ajaxCall);
}


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


function loadPokemonData( response ) {
   //need picture, number, name, height, weight, ability, type,  
    var nameOfPokemon = response.name;
    $("#pokemonName").text(nameOfPokemon);
    var pokemonWeight = response.weight;
    $('#weight').text(pokemonWeight);
    var pokemonImage = response.sprites.front_default; 
    $('#pokemonImage').src(pokemonImage);
    var pokemonHeight = response.height;
    $('#height').text(pokemonHeight);
    var pokeNumber = response.id;
    $('#pokeNumber').text(pokeNumber);
}

// http://pokeapi.co/api/v2/pokemon/ <------number

function enterNumber() {
    var numberPressed = $(this).text();
    console.log(numberPressed);
        if(pokemonSearchIndex.length < 3){
            pokemonSearchIndex.push(numberPressed);
            pokeNumber = pokemonSearchIndex.join('')
        } else {
            pokemonSearchIndex.shift();
            pokemonSearchIndex.push(numberPressed);
            pokeNumber = pokemonSearchIndex.join('');
        }
        console.log(pokeNumber);
        pokeNumberSearchDisplay(pokeNumber);
}

function pokeNumberSearchDisplay( number ){
    $(".numberSearchBar").text(`SEARCH: ${number}`);
}

function submitPokeNumber(  ) {
    getPokemon( pokeNumber );
    // getPokemonDummyData( pokeDummyData )

}