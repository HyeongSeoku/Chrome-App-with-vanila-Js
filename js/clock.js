const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //padStart() : 앞부분에 공간 만듦  padStart(자릿수 ,앞에 넣을 글자)  <=> padEnd()
  const minutes = String(date.getMinutes()).padStart(2, "0");
  let time = "";
  time = `${hours}:${minutes}`;
  clock.innerText = time;
}
getClock();
setInterval(getClock, 1000); //1초마다 반복
