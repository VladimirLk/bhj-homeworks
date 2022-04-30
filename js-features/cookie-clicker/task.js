const element = document.getElementById("cookie"); 
const clicker = document.getElementById("clicker__counter"); 
const speed = document.getElementById("clicker__speed");

let counter = 0;
function start (){
  clicker.textContent = ++counter;
  element.width = (counter % 2 != 0) ? 300 : 200;

}
element.onclick = start;





