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

const bgImage = document.createElement("img"); //Element 생성

bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(${bgImage.src})`; //백그라운드에 이미지 삽입
document.body.style.backgroundSize = "100% 100%"; // 배경 이미지 꽉차게
document.body.style.backgroundRepeat = "no-repeat";
//document.body.appendChild(bgImage); //Element 추가  (body 에)
