let firstUserSelcted;
let secondUserSelected;
let totalClicks;





document.getElementById("cross").onclick = function() {addUserChoice()};
document.getElementById("circle").onclick = function() {addUserChoice()};

function addUserChoice() {
    if(document.getElementById("cross").innerText=='X'){
        firstUserSelcted='X'
        secondUserSelected='O'
    }else if(document.getElementById("cross").innerText=='0'){
        firstUserSelcted='O'
        secondUserSelected='X'
    }
  document.getElementById("cross").style.visibility='hidden'
  document.getElementById("circle").style.visibility='hidden' 
}
function clicksDone(){
    let symbol=''
    totalClicks=totalClicks+1

}