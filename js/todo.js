const toDoForm = document.getElementById("todo-form"); //form
const toDoInput = toDoForm.querySelector("#todo-form input"); //todo-form안의 input 값
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //todoList 저장할 변수

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify() : JavaScript object 나 array 또는 어떤 JavaScript 코드던 간에 string 으로 만들어줌
}

function handleDeleteBtn(event) {
  const deletLi = event.target.parentElement;
  deletLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deletLi.id)); //li의 id는 string
  saveToDos(); //지운 다음 저장
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); //li element생성
  li.id = newTodo.id; //li에 id 값 부여 (newTodo의 id)
  const span = document.createElement("span"); //input.value 값 담을 span
  span.innerText = newTodo.text;
  const deleteBtn = document.createElement("button"); //button element생성생성
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", handleDeleteBtn); //삭제 메소드
  li.appendChild(span); //li에 span 자식 추가
  li.appendChild(deleteBtn);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault(); //form의 기본 event 제거 (event : submit시 새로고침)
  const newTodo = toDoInput.value; //input의 값 저장
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoInput.value = ""; //입력 후 input 초기화
  toDos.push(newTodoObj);
  paintToDo(newTodoObj); //Element 생성 & 입력값 text로 넣어줌
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //parsedToDos가 있을경우 toDos에 이전의 것들 저장
  parsedToDos.forEach(paintToDo); //저장되있는 값들을 화면에 불러옴
}
