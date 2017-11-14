'use strict';
//alert("JS is working");

var table = document.getElementsByTagName('table')[0];
var takenElArray = [];

table.addEventListener('click',function(e){
    checkIfTaken(e.target);
});

function checkIfTaken(targetEl){
    if(takenElArray.includes(targetEl)){
        console.log("It's taken!");
    }
    else{
        takenElArray.push(targetEl);
        checkVictory();
    }
}

function checkVictory(){
    //TODO
}
