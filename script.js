let secretNum = Math.floor(Math.random() * 20 + 1);
console.log("secret number is",secretNum);
let score=document.querySelector(".score").innerHTML;
let highscore=0;

const checkNumber= ()=>{
let guessNum=(document.getElementsByClassName("guess")[0].value);
console.log(guessNum)
if(!guessNum){
  document.querySelector(".message").innerHTML="input field empty";
return;
}
if(guessNum==secretNum){
    console.log("correct")
  document.querySelector(".message").innerHTML=" Congratulations!you guessed the right number";
  document.body.style.backgroundColor="green";
  document.querySelector(".number").innerHTML=secretNum;
  if(highscore < score){
    highscore=score;
    document.querySelector(".highscore").innerHTML=highscore;
  }}
 else {
    score--
    console.log("new score:",score)
    document.querySelector(".score").innerHTML=score
    if(guessNum < secretNum){
        console.log("Too low!")
    document.querySelector(".message").innerHTML="Too low,try again!"
}else{
    console.log("Too High!")
    document.querySelector(".message").innerHTML="Too high,try again!"
 }}
}
function reset() {
  score=20;
   document.body.style.backgroundColor="#222"
   document.querySelector(".number").innerHTML="?";
    document.querySelector(".score").innerText=score
    document.querySelector(".message").innerHTML="Start guessing... "
    document.querySelector(".guess").value=" ";
    secretNum = Math.floor(Math.random() * 20 + 1);
    console.log("secret number after guessing number again",secretNum);
}
console.log(reset);
