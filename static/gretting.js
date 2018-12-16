let form=document.querySelector('.js-form');
let jsinput=form.querySelector("input");
let greeting=document.querySelector(".js-greeting");

function handle_submit(event){
	event.preventDefault();
	const currentValue=jsinput.value;
	localStorage.setItem("user_name",currentValue);
	paint_greeting(currentValue);
}

function ask_name(){
	form.classList.add("showing");
	form.addEventListener("submit",handle_submit);

}


function paint_greeting(text){
	form.classList.remove("showing");
	greeting.classList.add("showing");
	greeting.innerText='안녕하세요'+text+'님';
}

function road_name()
{
	const current_user=localStorage.getItem('user_name');
	if(current_user===null){
		ask_name();
	}else{
		paint_greeting(current_user);
	}
}
function init(){
	road_name();
}
init();