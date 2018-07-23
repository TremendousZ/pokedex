
$(document).ready(startUp);


function startUp() {
    $('.enter').on('click' , submitPokeNumber);
    $(".keyPad > *").on('click', enterNumber);
    $(".clear").on("click", clearNumberSearchBar);
    $('.side').on('click',selectImmediatePokemon);

    
}
var pokeNumber = null;
var pokemonSearchIndex = [];

function getPokemon( number ){
    console.log("AJAX initiated");

    var ajaxCall = {
        dataType: "json",
        url: `https://pokeapi.co/api/v2/pokemon/${number}`,
        // method: 'get',
        success: loadPokemonData,
        // error: console.log

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
    var nameOfPokemon = response.name;
    $("#pokemonName").text(nameOfPokemon);
    readPokeName( nameOfPokemon);
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



function readPokeName (pokemonName) {
    responsiveVoice.speak( pokemonName, "UK English Female");

}



// {
//     "audioConfig": {
//       "audioEncoding": "LINEAR16",
//       "pitch": "0.00",
//       "speakingRate": "1.00"
//     },
//     "input": {
//       "text": "Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 32 voices, available in multiple languages and variants. It applies DeepMind’s groundbreaking research in WaveNet and Google’s powerful neural networks to deliver the highest fidelity possible. As an easy-to-use API, you can create lifelike interactions with your users, across many applications and devices."
//     },
//     "voice": {
//         'languageCode':'en-gb',
//         'name':'en-GB-Standard-A',
//         'ssmlGender':'FEMALE'
//     }
//   }

//   https://texttospeech.googleapis.com/v1beta1/text:synthesize

//   function readPokemonName( string ){
//     console.log("AJAX initiated");

//     var ajaxCall = {
//         dataType: "json",
//         url: "https://texttospeech.googleapis.com/v1beta1/text:synthesize",
//         method: 'POST',
//         success: loadPokemonData,
//         // error: console.log

//     }
//     $.ajax(ajaxCall);
// }

  