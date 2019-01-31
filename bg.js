const body=document.querySelector('body');

const IMAGECOUNT=3;



function paintImage(imagenumber){
	const image=new Image();
	image.src='static/image/'+(imagenumber+1)+'.jpg';
	image.classList.add('bgImage');
	body.appendChild(image);
}

function genRandomNumber(){
	random=Math.floor(Math.random()*IMAGECOUNT);
	return random
}


function init(){
	const randomNumber=genRandomNumber();
	paintImage(randomNumber);
}
init();