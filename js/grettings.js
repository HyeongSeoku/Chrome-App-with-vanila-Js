const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const gretting = document.querySelector("#gretting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
const time = parseInt(new Date().getHours());

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGrettings(userName);
}

function paintGrettings(username) {
  gretting.classList.remove(HIDDEN_CLASSNAME);
  if (6 <= time && time < 12) {
    gretting.innerText = `Good Morning ${username} .`;
  } else if (12 <= time && time < 19) {
    gretting.innerText = `Good afthernoon ${username} .`;
  } else if (19 <= time && time < 22) {
    gretting.innerText = `Good Evening ${username} .`;
  } else {
    gretting.innerText = `It's a Good night ${username} .`;
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGrettings(savedUsername);
}

function editGrettings() {
  console.log("MouseOver Event rejacted!");
}

gretting.addEventListener("mouseover", editGrettings);
