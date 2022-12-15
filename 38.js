function codigor(){
    let codigo = document.getElementById("codigo")
    codigo = codigo.value

    let senha = document.getElementById("senha")
    senha = senha.value

    if (codigo != '1234') {
        alert("Usuário não encontrado")
    }else{
        if ((codigo === '1234') && (senha != '9999')){
            alert("Verifique sua senha e tente novamente")
        }else{
            alert("Bem vindo(a) de volta!")
        }
    }
    
}