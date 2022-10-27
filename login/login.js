document.addEventListener("submit", function (event) {
  event.preventDefault();
});
var usuario = (document.getElementById("user").value = null);
var senha = (document.getElementById("senha").value = null);
function logar() {
  var usuario = document.getElementById("user");
  var senha = document.getElementById("senha");

  var listaUser = [];
  var userValid = {
    user: "",
    senha: "",
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));

  listaUser.forEach((item) => {
    if (usuario.value == item.userCad && senha.value == item.senhaCad) {
      userValid = {
        user: item.userCad,
        senha: item.senhaCad,
      };
    }
  });

  if (usuario.value == userValid.user && senha.value == userValid.senha) {
    localStorage.setItem("userLogado", JSON.stringify(userValid));

    let token = Math.random().toString(16).substring(2);
    localStorage.setItem("token", token);

    window.location.href = "/index.html";
  } else {
    alert("usuario ou senha incorretos");
  }
}
