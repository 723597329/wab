const todoform=document.querySelector(".js-todo-form");
const todoinput=todoform.querySelector("input");
const todolist=document.querySelector(".js-todo-list");

let todos=[];


function deltodo(event){
	const btn=event.target;
	const li=btn.parentNode;
	todolist.removeChild(li);
	const cleantodos=todos.filter(function(toDo){
		return toDo.id!==parseInt(li.id)
	});
	todos=cleantodos;
	savetodos();
}

function savetodos(){
	localStorage.setItem("todos",JSON.stringify(todos));
}

function painttodo(text){
	const todoli=document.createElement("li");
	const delBtn=document.createElement("button");
	delBtn.innerHTML="삭제";
	delBtn.addEventListener("click",deltodo);
	const span=document.createElement("span");
	span.innerText=text;
	todoli.appendChild(span);
	todoli.appendChild(delBtn);
	todolist.appendChild(todoli);
	todoli.id=todos.length+1;
	const todoobj={
		text:text,
		id:todos.length+1
	};
	todos.push(todoobj);
	savetodos();
}

//todo 텍스트창에 뭔가를 쓴 후 엔터를 쳤을 때 실행되는 함수
function handlesubmit(event){
	event.preventDefault();
	const currentValue=todoinput.value;
	painttodo(currentValue);
	todoinput.value="";
}

function load_todos(){
	const todos=localStorage.getItem('todos');
	if(todos!==null){
		const parsedtodos=JSON.parse(todos);
		parsedtodos.forEach(function(todo){
			painttodo(todo.text);
		});
	}
}


function init(){
	load_todos();
	todoform.addEventListener('submit',handlesubmit);
}
init();