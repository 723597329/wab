//텍스트박스에 어떤 것을 입력한 후에 입력한 문자와 몇번 예제를 선택했는 지 메세지로 출력하는 함수
function input(){
	var input = document.getElementById("input").value; 
	var check = document.getElementsByName("rdoSample");
	var i=0;
	var trueCheck=0;
	while(i<check.length)
	{
		if(check[i].checked)
			trueCheck=check[i];
		i++;
	}
	a = input;
	alert(a+":"+trueCheck.value+"번 예제");
}

text_box=document.getElementById("input");
text_box.addEventListener("change",input);

//버튼을 클릭하면 화면색이 바뀌는 함수
function bg_color_button(){
	var target=document.querySelector('body');
	var links= document.querySelectorAll('a');
	if(this.value==='black')
	{
		target.style.backgroundColor='black';
		target.style.color='white';
		this.value='white';
		var i=0;
		while(i<links.length)
		{
			links[i].style.color='red';
			i++;
		}
	}else
	{
		target.style.backgroundColor='white';
		target.style.color='black';
		this.value='black';
		var i=0;
		while(i<links.length)
		{
			links[i].style.color='blue';
			i++;
		}
	}
}
button=document.getElementById("bg_Button");
button.addEventListener("click",bg_color_button);

function timeroad(){
	let date= new Date();
	let hours=date.getHours();
	let minute=date.getMinutes();
	let nowtime=`${hours}:${minute}`;
	document.querySelector('h1').innerText=`웹 ${nowtime}`;
	return nowtime
}
function init(){
	time=timeroad();
	setInterval(timeroad,1000);
}
init();