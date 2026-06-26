const button =
document.getElementById("theme-toggle");

button.onclick = function(){

document.body.classList.toggle("dark");

};

function updateClock(){
const now = new Date();
document.getElementById("datetime").innerHTML =
now.toLocaleString();
}
setInterval(updateClock,1000);
updateClock();
