const button = document.getElementById("mybutton")
const label = document.getElementById("mylabel")
const min = 1;
const max = 6;

let randomnumber;

button.onclick = function(){
    randomnumber = Math.floor(Math.random() * max)+min 
    label .textContent = randomnumber;  
}