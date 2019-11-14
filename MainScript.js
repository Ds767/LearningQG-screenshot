var IS=document.getElementById("InputSize");
var SS=document.getElementById("Screenshot");
var cxt=SS.getContext("2d");
var img=new Image();
var ax=0; //X Axis
var ay=0; //Y Axis
var imgw=20; //image width
var imgh=20; //image height
function Generate(){
	SS.width=document.getElementById("InputWidth").value;
	SS.height=document.getElementById("InputHeight").value;
	Draw1();
	//Draw2();
}

function Draw1(){
	img.src="Res/qg1.png";
	cxt.drawImage(img,ax,ay,imgw,imgh); //Left 1
	cxt.drawImage(img,ax+5,ay,imgw,imgh); //Left 2
	cxt.drawImage(img,ax+10,ay,imgw,imgh); //Left 3
	cxt.drawImage(img,ax+15,ay,imgw,imgh); //Left 4
	cxt.drawImage(img,ax+20,ay,imgw,imgh); //Left 5
	cxt.drawImage(img,ax+25,ay,imgw,imgh); //Left 6
	cxt.drawImage(img,ax+30,ay,imgw,imgh); //Left 7
}

function Drwa2(){
	img.src="";
	cxt.drawImage(img,ax,ay,imgw,imgh); //Right 1
}