let random = Math.floor(Math.random() * 11);
let display = document.getElementById("display-text");
let button = document.getElementById("submit");
let restart = document.getElementById("restart");

console.log(random)



function guessTheNumber(event){
    event.preventDefault()
    let input = document.getElementById("input").value
    console.log(input)
    

    if (input == random){
        display.innerText = "Hurrayyy, you won!!!!";

     
    } else if ( input < random) {
        display.innerText = "too low go higher"
    
    }
    else if (input > random){
        display.innerText = "too high go lower"
 
    }
 }


restart.onclick = function (event){
    event.preventDefault();
    location.reload()

}