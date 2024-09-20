const divContainer = document.querySelector(".div-container");
let divisions = [];
let numbering = [];
let currentDimension = 16;
let widthPerDimension = (500/currentDimension)+"px";
let colorChoice = "black";
let backgroundColorChoice = "white";

test();


const gridSizeInput = document.querySelector("#grid-size");
const colorInput = document.querySelector("#pen-color");
const backgroundColorInput = document.querySelector("#background-color");

colorInput.addEventListener("input", function(e){
    colorChoice = colorInput.value;
});

backgroundColorInput.addEventListener("input",function(e){
    backgroundColorChoice = backgroundColorInput.value;
    divContainer.style.backgroundColor = backgroundColorChoice;
});


const slider = document.querySelector("#grid-size");
slider.addEventListener("click", function(e){
    const number = document.querySelector("#range-slider-number");
    currentDimension = slider.value;
    widthPerDimension = (500 / currentDimension) + "px";
    removeDivs();
    test();
    number.textContent = slider.value+"x"+slider.value;
});

divContainer.style.border = "black solid 2px"; 

function test(){
    
    for(let i = 0; i < currentDimension; i++){
    
        for(let j = 0; j < currentDimension; j++){
            
        
    
            const div = document.createElement("div");
            divContainer.appendChild(div);
    
            div.style.width = widthPerDimension;
            div.style.height = widthPerDimension;
    
            div.className = "grid-divs";

            div.addEventListener("mouseover", function(e){
                div.style.backgroundColor = colorChoice;
            });
        }
    }
    
}

    
 


function removeDivs(){
    const allDivs = document.querySelectorAll(".grid-divs");
    allDivs.forEach(tempDiv =>{
        tempDiv.remove();
    });
}