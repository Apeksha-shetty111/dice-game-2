var randomNumber1= Math.floor(Math.random()*6)+1;
var dice="dice"+randomNumber1+".png";
var source="images/"+dice;

document.querySelectorAll("img")[0].setAttribute("src",source);

var randomNumber2= Math.floor(Math.random()*6)+1;
var dice="dice"+randomNumber2+".png";
var source="images/"+dice;

document.querySelectorAll("img")[1].setAttribute("src",source);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Apeksha wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="karthik wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}


