var img = document.querySelectorAll(".img");
img.forEach((img) => {
  img.addEventListener("click", function () {
    document.querySelector(".img-grand").src = this.src;
    document.querySelector(".textp").innerHTML = this.alt;
  });
});
var posPhoto = 0;
var btnRight = document.querySelector("#right");
btnRight.addEventListener("click", function () {
  posPhoto++;
  if (posPhoto >= img.length) {
    posPhoto = 0;
  }
  document.querySelector(".img-grand").src = img[posPhoto].src;
  document.querySelector(".textp").innerHTML = img[posPhoto].alt;
});
var btnLeft = document.getElementById("left");
btnLeft.addEventListener("click", function () {
  posPhoto--;
  if (posPhoto < 0) {
    posPhoto = img.length - 1;
  }
  document.querySelector(".img-grand").src = img[posPhoto].src;
  document.querySelector(".textp").innerHTML = img[posPhoto].alt;
});