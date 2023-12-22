"use strict"

$("#heading").append("<h1>Discover Amiibo</h1>");
const content =
    $.get("https://amiiboapi.com/api/amiibo/?showusage&showgames", function (data) {

        for (let key in data) {
            const main = data[key];
            // Console logs all the 
            // values in the objArr Array:
            console.log(main[main.length - 1]);
            console.log(main[0]);
            console.log(main[0].image);
            console.log(main.length);
            let allInputs = $(":input");
            let formChildren = $("form > *");


            $("form").on("submit", function (event) {
                event.preventDefault();
                $('#window').append(`<img src=${main[0].image} />`)
            });
        }
    }); 