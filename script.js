const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const body = document.getElementById("gradient");
const button = document.querySelector(".button");
set()
function set(){
    body.style.background = 
"linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ","
+ color3.value 
+ ")";
}

function randomColor() {
    color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
    color2.value  = '#'+Math.floor(Math.random()*16777215).toString(16);
    color3.value  = '#'+Math.floor(Math.random()*16777215).toString(16);
    set()
    
    
}
css.textContent = body.style.background + ";";
function setGradient() {
    set()

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);
button.addEventListener("click", randomColor)