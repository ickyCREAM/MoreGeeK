function sair() {
  localStorage.removeItem("userLogado");
  // localStorage.removeItem('token')
  window.location.href = "teste login/login.html";
}

function usuarios() {
  var usuario = document.getElementById("usr");
  var userlogado = JSON.parse(localStorage.getItem("userLogado"));

  usuario.innerHTML = "Saudações " + userlogado.user;
}
