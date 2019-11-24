var IS=document.getElementById("InputSize");
var SS=document.getElementById("Screenshot");
var ctx=SS.getContext("2d");
var img=new Image();
//img.setAttribute('crossOrigin', 'anonymous');
var img2=new Image();
//img2.setAttribute('crossOrigin', 'anonymous');
var imgw=101; //image width Lock
var imgh=257; //image height 30'score
var imgitv=141; //interval of image to image
var imgitv1=20; //interval of image inside

function Generate(){
	SS.width=document.getElementById("InputWidth").value;
	SS.height=document.getElementById("InputHeight").value;
	ctx.fillStyle="#ffffff";
	ctx.fillRect(0,0,SS.width,SS.height);
	DrawBG(); //draw background
	DrawPG(); //draw progress bar and score text and data
	//DrawTX(); //draw text of score detail.time,score,item,time
	//Draw2();
	
}

function DrawBG(){
	ctx.fillStyle="#fafafa";
	ctx.fillRect(0,160,SS.width,imgh/3*8);
}

function DrawPG(){ //存在两次提交不一样成绩的图片的情况！！！
	
	var ax=SS.width+imgitv1; //left corner offset
	var ay=160+imgh/3*5; //30'score y axis
	var rm=0; //random number
	var today=new Date(); //initialize date
	var dat=today.getMonth()+1+'.'+today.getDate();
	//Right 1
	ctx.fillStyle="#ff0000";
	ctx.font="40px Georgia";
	img2.src="Res/qg2.png";
	rm=Math.floor(Math.random()*20);
	ctx.drawImage(img2,ax-imgitv*1,ay-imgh/30*rm,imgw,imgh/30*(30+rm));
	ctx.fillText(30+rm+"分",ax-imgitv*1+12,ay-imgh/30*rm-22);
	ctx.fillText("今日",ax-imgitv*1+12,225);
	//Left 7
	ctx.fillStyle="#cccccc";
	ctx.font="35px Georgia";
	img.src="Res/qg1.png";
	for(var i=2;i<9;++i){
		
		rm=Math.floor(Math.random()*20);
		ctx.drawImage(img,ax-imgitv*i,ay-imgh/30*rm,imgw,imgh/30*(30+rm));
		ctx.fillText(30+rm+"分",ax-imgitv*i+17,ay-imgh/30*rm-20);
		
		today.setDate(today.getDate()-1);
		dat=(today.getDate()<10)?today.getMonth()+1+".0"+today.getDate():today.getMonth()+1+'.'+today.getDate();
		ctx.fillText(dat,ax-imgitv*i+17,225);
	}
	
}

function DrawTX(){

}

function Download(){
	let aLink = document.createElement('a');
	aLink.download = 'screenshot.png';
	aLink.href = SS.toDataURL("image/png");
	aLink.click();
	//window.open(SS.toDataURL("image/png")); //不能用
}

