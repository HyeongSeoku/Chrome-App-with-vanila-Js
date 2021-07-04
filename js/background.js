const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)]; //floor: 내림

const bgImage = document.createElement("img");      //Element 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);         //Element 추가  (body 에)
