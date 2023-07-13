console.log('🟥 🟦 🟩 🟨');

$(document).ready(readyNow);

function readyNow(){
    console.log('🟥 🟦 🟩 🟨');
    $("#red-btn").on('click', addRedColorBlock);
    $("#blue-btn").on('click', addBlueColorBlock);
    $("#green-btn").on('click', addGreenBlock);
    $('#yellow-btn').on('click', addYellowBlock);

}

function addRedColorBlock(){
    $('#blocks').append(`<div class="block red-fill"></div>`);
}

function addBlueColorBlock(){
    $('#blocks').append(`<div class="block blue-fill"></div>`);
}

function addGreenBlock(){
    $('#blocks').append(`<div class="block green-fill"></div>`);
}

function addYellowBlock(){
    $('#blocks').append(`<div class="block yellow-fill"></div>`);
}
