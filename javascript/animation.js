let load = document.getElementById("load");
let loadText = document.getElementById("load-text");
const header = document.querySelector("header");
const main = document.querySelector("main");
const titulo = document.querySelector("main>h2");
var cont = window.localStorage.getItem("cont");
var body = document.querySelector("body");

if (cont != null) {
  cont = 4;
} else {
  cont = 1;
}

loadText.classList.add("animation");

loadText.addEventListener("animationend", (e) => {
  cont += 1;
  loadText.classList.remove("animation");
  loadText.style.display = "none";
  setTimeout(function () {
    loadText.style.display = "block";
    if (cont == 2) {
      loadText.innerHTML = "SEJA BEM VINDO";
    } else if (cont == 3) {
      loadText.innerHTML = "AS COISAS AINDA ESTÃO SENDO CONSTRUIDAS AQUI";
    } else if (cont == 4) {
      loadText.innerHTML = "MAS VAMOS MOSTRAR UM POUCO DO NOSSO TRABALHO";
    }
    if (cont != 5) {
      loadText.classList.add("animation");
    } else {
      loadText.classList.remove("animation");
      loadText.style.display = "none";
      load.style.animation = "fadeOut 3s ease-in-out";
      header.style.animation = "up 3s ease-in-out";
      main.style.animation = "down 3s ease-in-out";
      titulo.style.animation = "fadeIn 3s ease-in-out";
    }
  }, 500);
  window.localStorage.setItem("cont", 5);
});

load.addEventListener("animationend", (e) => {
  if (e.animationName == "fadeOut") {
    load.style.display = "none";
    body.style.overflow = "visible";
  }
});
