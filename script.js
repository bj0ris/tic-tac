'use strict';
//alert("JS is working");

var table = document.getElementsByTagName('table')[0];
//takenElArray is an array of which spots has been taken
var takenElArray = [];
var playerImage = document.getElementById('playerImage');
var player = 'x';  //?????? Maybe not have it as a global?

changePlayer();

table.addEventListener('click',function(e){
    checkIfTaken(e.target);
});

function checkIfTaken(targetEl){
    if(takenElArray.includes(targetEl)){
        console.log("It's taken!");
    }
    else{
        takenElArray.push(targetEl);
        console.log("Unkown player took "+targetEl);
        addMarker(targetEl);
        checkVictory();
        changePlayer();
    }
}

function checkVictory(){
    //TODO
}

function changePlayer(){
    if(player==='x'){
        player = 'o';
        playerImage.setAttribute('src','./images/O.png');
    }
    else{
        player = 'x';
        playerImage.setAttribute('src','./images/X.png');
    }
}

function addMarker(targetEl){
    var newImage = document.createElement('img');
    if(player==='x'){
        newImage.setAttribute('src','./images/X.png');
    }
    else{
        newImage.setAttribute('src','./images/O.png');
    }
    targetEl.appendChild(newImage);
}
