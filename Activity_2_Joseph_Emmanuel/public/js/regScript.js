var p1Fname;
var p1Lname;
var p1Email;
var p2Fname;
var p2Lname;
var p2Email;

document.getElementById("registerbtn").addEventListener("click", getDetails);
function getDetails() {
  // player 1 details
  p1Fname = document.getElementById("fnamep1").value;
  p1Lname = document.getElementById("lnamep1").value;
  p1Email = document.getElementById("emailp1").value;
  //player 2 details
  p2Fname = document.getElementById("fnamep2").value;
  p2Lname = document.getElementById("lnamep2").value;
  p2Email = document.getElementById("emailp2").value;
  //   console.log("These are the details of the first player");
  //   console.log(p1Fname);
  //   console.log(p1Lname);
  //   console.log(p1Email);
  //   console.log("These are the details of the second player");
  //   console.log(p2Fname);
  //   console.log(p2Lname);
  //   console.log(p2Email);
}
function saveToDb(){
    

}
