const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

function sair() {
  localStorage.removeItem("userLogado");
  // localStorage.removeItem('token')
  window.location.href = "login.html";
}

function usuarios() {
  var usuario = document.getElementById("usr");
  var userlogado = JSON.parse(localStorage.getItem("userLogado"));

  usuario.innerHTML = userlogado.user;
}
