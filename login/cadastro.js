document.addEventListener("submit", function (event) {
  event.preventDefault();
});
function cadastrar() {
  var user = document.getElementById("user").value;
  var senha = document.getElementById("senha").value;
  var confirmsenha = document.getElementById("confirmsenha").value;

  let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

  listaUser.push({
    userCad: user,
    senhaCad: senha,
  });

  localStorage.setItem("listaUser", JSON.stringify(listaUser));

  setTimeout(() => {
    window.location.href = "/login.html";
  }, 3000);
}
