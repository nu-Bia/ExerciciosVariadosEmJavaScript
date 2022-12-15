function calcular(){ 

    let quantidade = document.getElementById("quantidade");
    quantidade = parseFloat(quantidade.value);

    let preco = document.getElementById("preco");
    preco = parseFloat(preco.value);

    let desconto, total = 0
    if (quantidade<=5) {
        total = quantidade*preco
        desconto = total*0.02 
    } else {
        if((quantidade>5) && (quantidade<=10)){
        total = quantidade*preco
        desconto = total*0.03 
        } else {
            if(quantidade>10){
                total = quantidade*preco
                desconto = total*0.05 
            }
        }
    }
    total = (quantidade*preco)-desconto
    alert("Total a pagar é R$"+total)
}