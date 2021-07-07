const todayText = document.querySelector("#date");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const now = new Date();
let month = now.getMonth();
let day = String(now.getDate()).padStart(2, "0");
let year = now.getFullYear();

todayText.innerText = `${monthNames[month]} / ${day} / ${year}`;
//todayText.innerText = ``
