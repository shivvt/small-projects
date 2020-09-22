var x=Math.random();
x=x*6;
var randomNumber1=Math.floor(x) +1;
var r="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", r);
var y=Math.random();
y=y*6;
var randomNumber2=Math.floor(y) +1;
var r2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", r2);
if(r==r2)
{
    document.querySelector("h1").textContent="🚩DRAW!🚩";
}
else if(r>r2)
{
    document.querySelector("h1").textContent="🚩Player1 WINS!";
}
else if(r<r2)
{
    document.querySelector("h1").textContent="Player2 WINS!🚩";
}
