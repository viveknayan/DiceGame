//for first dice
var randomnumber=Math.floor(Math.random()*6)+1;//it will give you value from 1-6
var randomDiscImage="dice"+randomnumber+".png";//it will give you dice name ex-dice1.png
var randomImageLocation="images/"+randomDiscImage;//it will give proper location ex-images/dice1.png
var image1=document.querySelectorAll("img")[0];//here it will give you two img so i selected 1st one using this[0].
image1.setAttribute("src",randomImageLocation);//here we are going to set the new image location


//Now for second dice

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomImageLocation2="images/"+"dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageLocation2);

if(randomnumber>randomnumber2)
{
	document.querySelector("h1").innerHTML="Player1 win";
}
else if(randomnumber==randomnumber2)
	document.querySelector("h1").innerHTML="Match Draw";
else
	document.querySelector("h1").innerHTML="Player2 win";