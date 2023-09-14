//for button
let play=document.querySelector("button");
let count1=0;
let count2=0;
play.addEventListener("click",function(){
    //for first dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// if(randomNumber1==1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber1==2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber1==3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber1==4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber1==5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// else if(randomNumber1==6){
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }
 let radomimgsource1="images/dice"+randomNumber1+".png";
 document.querySelector(".img1").setAttribute("src",radomimgsource1);

// for second dice
   let randomNumber2 = Math.floor(Math.random() * 6) + 1;
// if(randomNumber2==1){
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber2==2){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber2==3){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber2==4){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber2==5){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// else if(randomNumber2==6){
//     document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }
 let radomimgsource2="images/dice"+randomNumber2+".png";
 document.querySelector(".img2").setAttribute("src",radomimgsource2);

//for round-winner and wincount

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
    count1++;
    document.getElementById("wincount1").innerHTML="Wins-"+count1;
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
    count2++;
    document.getElementById("wincount2").innerHTML="Wins-"+count2;
}
else{
    document.querySelector("h1").innerHTML="Draw!";

}

//for game winner
if(count1==5){
    document.querySelector("h1").innerHTML="Player 1 Wins the Game!";
    document.querySelector("button").innerHTML="Play Again";
    document.querySelector("button").addEventListener("click",function(){
        location.reload();
    });
}
else if(count2==5){
    document.querySelector("h1").innerHTML="Player 2 Wins the Game!";
    document.querySelector("button").innerHTML="Play Again";
    document.querySelector("button").addEventListener("click",function(){
        location.reload();
    });
}
});
