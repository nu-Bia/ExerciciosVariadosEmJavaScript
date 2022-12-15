function media(){
    var n1=parseIntFloat(prompt("nota 1 = "));
    var n2=parseIntFloat(prompt("nota 2 = "));
    var media= (n1+n2/2);

    if (media>=6){
    alert("aprovado"+media);
    } else{
        alert("reprovado");
    }
}
    

