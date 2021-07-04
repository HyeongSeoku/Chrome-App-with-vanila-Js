const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input"); //todo-form안의 input 값
const toDoList = document.getElementById("todo-list");

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 값 저장
  toDoInput.value = ""; //입력 후 input 초기화
  paintToDo(newTodo);
}

function handleDeleteBtn(event){
    const deletLi = event.target.parentElement;
    deletLi.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span =document.createElement("span");
    span.innerText = newTodo;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click",handleDeleteBtn);
    li.appendChild(span);   //li에 span 자식 추가
    li.appendChild(deleteBtn);
    
    toDoList.appendChild(li);
}



toDoForm.addEventListener("submit", handleTodoSubmit);

