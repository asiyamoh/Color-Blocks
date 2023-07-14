console.log('🟥 🟦 🟩 🟨');

$(document).ready(readyNow);

function readyNow(){
    console.log('🟥 🟦 🟩 🟨');
    $("#red-btn").on('click', addRedColorBlock);
    $("#blue-btn").on('click', addBlueColorBlock);
    $("#green-btn").on('click', addGreenBlock);
    $('#yellow-btn').on('click', addYellowBlock);
   $('#blocks').on('click','.red-fill',removeRedColorBlock);
    $('#blocks').on('click','.blue-fill',removeBlueColorBlock);
    $('#blocks').on('click','.green-fill',removeGreenColorBlock);
     $('#blocks').on('click','.yellow-fill',removeYellowColorBlock);


    
}
let redCounter = 1;
function addRedColorBlock(){
    $('#blocks').append(`<div class="block red-fill"></div>`);
    redCounter++;
    $('#red-count').text(redCounter);
}

let blueCounter =1;
function addBlueColorBlock(){
    $('#blocks').append(`<div class="block blue-fill"></div>`);
    blueCounter++;
    $('#blue-count').text(blueCounter);
}

let greenCounter =1;
function addGreenBlock(){
    $('#blocks').append(`<div class="block green-fill"></div>`);
    greenCounter++;
    $('#green-count').text(greenCounter);
}

let yellowCounter =1;
function addYellowBlock(){
    $('#blocks').append(`<div class="block yellow-fill"></div>`);
    yellowCounter++;
    $('#yellow-count').text(yellowCounter);
}


 function removeRedColorBlock(){
    $(this).remove();
    redCounter--;
    $('#red-count').text(redCounter);
 }

function removeBlueColorBlock(){
    $(this).remove();
    blueCounter--;
    $("#blue-count").text(blueCounter);
 }

function removeGreenColorBlock(){
    $(this).remove();
    greenCounter--;
    $('#green-count').text(greenCounter);
 }

function removeYellowColorBlock(){
    $(this).remove();
    yellowCounter--;
    $('#yellow-count').text(yellowCounter);
 }