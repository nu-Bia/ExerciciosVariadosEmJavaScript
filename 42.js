function aposentadoria(){
    let codigo = document.getElementById("codigo")
    codigo = parseFloat(codigo.value)

    let anoNasc = document.getElementById("anoNasc")
    anoNasc = parseFloat(anoNasc.value)

    let anoIngresso = document.getElementById("anoIngresso")
    anoIngresso = parseFloat(anoIngresso.value)

    let anoAposentadoria = document.getElementById("anoAposentadoria")
    anoAposentadoria = anoAposentadoria.value
    
    let idade = anoAposentadoria-anoNasc
    let tempoTrabalho = anoAposentadoria-anoIngresso
    
    if ((idade>=65) || (tempoTrabalho>=30) || ((idade>=60)&&(tempoTrabalho>=25))){
        
        alert("Idade: "+idade+"\nTempo de trabalho: "+tempoTrabalho+"\n"+"\nRequerer aposentadoria")
    }else{
        alert("Idade: "+idade+"\nTempo de trabalho: "+tempoTrabalho+"\n"+"\nNão requerer aposentadoria")
    }
}