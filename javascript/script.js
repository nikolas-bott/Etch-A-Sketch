const divContainer = document.querySelector(".div-container");
let divisions = [];
let numbering = [];
let currentDimension = 16;
let widthPerDimension = (500/currentDimension)+"px";

divContainer.style.border = "black solid 2px"; 

 for(let i = 0; i <= 16; i++){
    
    for(let j = 1; j <= 16; j++){
        
    

        divisions[i+j] = document.createElement("div");
        divContainer.appendChild(divisions[i+j]);


        divisions[i+j].style.backgroundColor = "red";
        divisions[i+j].style.width = widthPerDimension;
        divisions[i+j].style.height = "100px";

        numbering[i+j] = document.createElement("p");
        divisions[i+j].appendChild(numbering[i+j]);
        numbering[i+j].textContent = j;
        
        console.log("as"+j);
    }
    console.log(i);
}