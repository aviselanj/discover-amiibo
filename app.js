"use strict"
const searchDropMenu = document.getElementById("search-dropdown");

$("#heading").append("<h1>Discover Amiibo</h1>");
const content =
    $.get("https://amiiboapi.com/api/amiibo/?type=figure", function (data) {

        for (let key in data) {
            const main = data[key];
            // Console logs all the values in the main Array:
           
            for(let i = 0; i < main.length; i++){
                console.log(main[i])
                console.log(main[i].image)
                console.log(main[i].character)
                $("form").on("submit", function (event) {
                    event.preventDefault();
                    $('#window').append(`<img src=${main[i].image} />`)
                    $('#window').append(`<p>${main[i].name}</p>`)
                });

            }
          
          
    }}); 
