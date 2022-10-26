var buttonC = window.document.getElementById('button')

document.addEventListener('submit', function(event) {
    event.preventDefault()
    salvarLocal()
})

function VerifyUser(){
    var name = document.getElementById('user').value;
    var usericon = document.getElementById('usericon');
    var validuser = false 

    var password = document.getElementById('senha').value;
    var senhaicon = document.getElementById('senhaicon')
    var validsenha = false

    var confirmsenha = document.getElementById('confirmsenha').value;
    var csenhaicon = document.getElementById('csenhaicon')
    var validconfirmsenha = false

    if(name.length < 3){
        console.log(usericon)
        usericon.setAttribute('style', 'color: red')
        validuser = false
        alert('user inválido')

    } else{
        console.log(usericon)
        usericon.setAttribute('style', 'color: green')
        validuser = true
    }

    if(password.length < 8){
        senhaicon.setAttribute('style', 'color: red')
        validsenha = false
        alert('senha muito curta')
    } else{
        senhaicon.setAttribute('style', 'color = green')
        validsenha = true
    }

    if(password.value != confirmsenha.value){
        csenhaicon.setAttribute('style', 'color = red')
        validconfirmsenha = false
        alert('não coincide com a anterior')
    } else{
        csenhaicon.setAttribute('style', 'color = green')
        validconfirmsenha = true
    }

}
    function salvarLocal(){
        
        if(validuser || validsenha || validconfirmsenha){
            var listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push{
            userCad: name.value

        }
        } else{

        }
    }