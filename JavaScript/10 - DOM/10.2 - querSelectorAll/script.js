"use strict";

// outro tipo de seletor que pode selecionar todos com a tag p
const p = document.querySelectorAll("p");

// Aqui estamos percorrendo os p com o for each e tranformando eles em Array
p.forEach((element, index)=>{
    element.style.padding = "20px";

    if(index == 0){
        element.style.color = "purple";
    };
    if(index == 1){
        element.style.color = "pink";
    };
    if(index == 2){
        element.style.background = "yellow";
    };
});