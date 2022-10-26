function logar(){

    var user = document.getElementById('user').value
    var senha = document.getElementById('senha').value
    
    if(user == "admin" && senha == "admin"){
        alert('Sucesso')
    } else{
        alert('User ou senha incorretos')
    }
    }