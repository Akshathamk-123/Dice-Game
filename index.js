var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice"+randomNumber1+".png";
var randomDiceImage2="dice"+randomNumber2+".png";
var image1= document.querySelectorAll("img")[0];
var image2= document.querySelectorAll("img")[1];
image1.setAttribute("src","images/"+randomDiceImage1);
image2.setAttribute("src","images/"+randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
