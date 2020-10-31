/* Task1.js - Add your Java Script Code Here */
function myFunction() {
  var p = document.getElementById("mydata");

  // set p.innerHTML equal to heads or tails
  var randomNumber = Math.random();

  if (randomNumber >= 0.5){
      p.innerHTML = "tails";
    } 

    else{
      p.innerHTML = "heads";
    }

}
