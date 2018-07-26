
$(document).ready(startUp);


function startUp() {
    $('.enter').on('click' , submitPokeNumber);
    $(".keyPad > *").on('click', enterNumber);
    $(".clear").on("click", clearNumberSearchBar);
    $('.side').on('click',selectImmediatePokemon);

    
}
let pokeNumber = null;
let pokemonSearchIndex = [];

function getPokemon( number ){
    console.log("AJAX initiated");

    let ajaxCall = {
        dataType: "json",
        url: `https://pokeapi.co/api/v2/pokemon/${number}`,
        // method: 'get',
        success: loadPokemonData,
        // error: console.log

    }
    $.ajax(ajaxCall);
}


function getPokemonDummyData( response ) {
    const nameOfPokemon = response.name;
    $("#pokemonName").text(nameOfPokemon);
    const pokemonWeight = response.weight;
    $('#weight').text(` WEIGHT: ${pokemonWeight} kg`);
    const pokemonImage = response.sprites.front_default; 
    $('#pokemonImage').attr("src", pokemonImage);
    const pokemonHeight = response.height;
    $('#height').text(`HEIGHT: ${pokemonHeight} m`);
    const pokeNumber = response.id;
    if(pokeNumber < 10) {
        $('#pokeNumber').text(`#00${pokeNumber}`);  
    } else if (pokeNumber < 100) {
        $('#pokeNumber').text(`#0${pokeNumber}`); 
    } else {
        $('#pokeNumber').text(`#${pokeNumber}`);  
    }
    const pokeType = response.types[0].type.name;
    $('#type').text( `TYPE: ${pokeType}`); 
    const pokeAbility = response.abilities[1].ability.name;
    $("#ability").text(`ABILITY: ${pokeAbility}`);

}


function loadPokemonData( response ) {
    debugger;
    const nameOfPokemon = response.name;
    $("#pokemonName").text(nameOfPokemon);

    const pokemonWeight = response.weight;
    $('#weight').text(` WEIGHT: ${pokemonWeight} kg`);

    const pokemonImage = response.sprites.front_default; 
    $('#pokemonImage').attr("src", pokemonImage);

    const pokemonHeight = response.height;
    $('#height').text(`HEIGHT: ${pokemonHeight} m`);

    const pokeNumber = response.id;
    const pokeAbility = response.abilities[1].ability.name;
    $("#ability").text(`ABILITY: ${pokeAbility}`);

    if(pokeNumber < 10) {
        $('#pokeNumber').text(`#00${pokeNumber}`);  
    } else if (pokeNumber < 100) {
        $('#pokeNumber').text(`#0${pokeNumber}`); 
    } else {
        $('#pokeNumber').text(`#${pokeNumber}`);  
    }

    if( response.types.length === 2){
        let pokeType1 = response.types[0].type.name;
        let pokeType2 = response.types[1].type.name;
        $('#type').text( `TYPE: ${pokeType1} , ${pokeType2}`); 
        let pokemonReadString = `Pokemon Name ${nameOfPokemon} Pokemon Number ${pokeNumber} type ${pokeType1} ${pokeType2} ability ${pokeAbility}`;
        readPokeName( pokemonReadString);

    } else {
        let pokeType = response.types[0].type.name;
        $('#type').text( `TYPE: ${pokeType}`); 
        let pokemonReadString = `Pokemon Name ${nameOfPokemon} Pokemon Number ${pokeNumber} type ${pokeType} ability ${pokeAbility}`;
        readPokeName( pokemonReadString);
    }
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
    // getPokemonDummyData( pokeDummyData );

}

function clearNumberSearchBar() {
    $(".numberSearchBar").text(`SEARCH: `);
    pokemonSearchIndex = [];
}

function selectImmediatePokemon(){
    debugger;
    if($(this).hasClass("leftDirection")) {
        --pokeNumber;
        getPokemon(pokeNumber);
    } else {
        ++pokeNumber;
        getPokemon(pokeNumber);
    }
}

function readPokeName ( string ) {
    responsiveVoice.speak( string , "UK English Female", {rate: 1});

}