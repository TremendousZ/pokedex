
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
    $('#weight').text(` WEIGHT: ${pokemonWeight} kg`);
    var pokemonImage = response.sprites.front_default; 
    $('#pokemonImage').attr("src", pokemonImage);
    var pokemonHeight = response.height;
    $('#height').text(`HEIGHT: ${pokemonHeight} m`);
    var pokeNumber = response.id;
    if(pokeNumber < 10) {
        $('#pokeNumber').text(`#00${pokeNumber}`);  
    } else if (pokeNumber < 100) {
        $('#pokeNumber').text(`#0${pokeNumber}`); 
    } else {
        $('#pokeNumber').text(`#${pokeNumber}`);  
    }
    var pokeType = response.types[0].type.name;
    $('#type').text( `TYPE: ${pokeType}`); 
    var pokeAbility = response.abilities[1].ability.name;
    $("#ability").text(`ABILITY: ${pokeAbility}`);

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
    // getPokemon( pokeNumber );
    getPokemonDummyData( pokeDummyData )

}