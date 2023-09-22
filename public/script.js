const img = document.querySelector("img");

const images = ["./img/open.png", "./img/closed.png"];

let index = 0;

function changeImage() {
  const img = document.querySelector("img");
  img.src = images[index];
  index++;
  if (index >= images.length) {
    index = 0;
  }
}
setInterval(changeImage, 400);
