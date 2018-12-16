function saveCoord(coordobj){
	localStorage.setItem('coords',JSON.stringify(coordobj));
}


function handleSucces(position){
	const latitude=position.coords.latitude;
	const longitude=position.coords.longitude;
	const coordobj={
		latitude:latitude,
		longitude:longitude
	}
	saveCoord(coordobj);
}

function handleError(){
	console.log("위치좌표 값을 찾지 못했습니다");
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleSucces,handleError);
}

function loadCoords(){
	const loadCoords=localStorage.getItem('coords');
	if(loadCoords===null){
		askForCoords();
	}
	else{
		//getWeather();
	}
}


function init(){
	loadCoords();
}
init();