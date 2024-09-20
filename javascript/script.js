const divContainer = document.querySelector(".div-container");
let divisions = [];
let numbering = [];
let currentDimension = 64;
let widthPerDimension = (500/currentDimension)+"px";

divContainer.style.border = "black solid 2px"; 

 for(let i = 0; i <= currentDimension; i++){
    
    for(let j = 1; j <= currentDimension; j++){
        
    

        divisions[i+j] = document.createElement("div");
        divContainer.appendChild(divisions[i+j]);


        divisions[i+j].style.backgroundColor = "red";
        divisions[i+j].style.width = widthPerDimension;
        divisions[i+j].style.height = widthPerDimension;

        divisions[i+j].className = "grid-divs";
        
        console.log("as"+j);
    }
    console.log(i);
}

const allDivs = document.querySelectorAll(".grid-divs");

allDivs.forEach(tempDiv =>{
    tempDiv.addEventListener("mouseover", function(e){
        tempDiv.style.backgroundColor = "green";
    });
});