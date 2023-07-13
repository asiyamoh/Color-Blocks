console.log('🟥 🟦 🟩 🟨');

$(document).ready(readyNow);

function readyNow(){
    console.log('🟥 🟦 🟩 🟨');
    $("#red-btn").on('click', addRedColorBlock);
}

function addRedColorBlock(){
    $('#blocks').append(`<div class="block red-fill"></div>`);
}
