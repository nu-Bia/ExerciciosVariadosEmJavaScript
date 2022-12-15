function alcool() {

    let litros = document.getElementById("litros");
    litros = parseFloat(litros.value);

    let tipoCombustivel = document.getElementById("tipoCombustivel");
    tipoCombustivel = (tipoCombustivel.value);

    valorFinal = 0
    
    if ((litros <= 20) && (tipoCombustivel === 'A')) {
        valorFinal = ((litros-(litros*(3/100)))*2.90).toFixed(2)
        alert("Preço a pagar: R$"+valorFinal)
    }else {
        if((litros > 20) && (tipoCombustivel === 'A')){
            
            valorFinal = ((litros-(litros*(5/100)))*2.90).toFixed(2)
            alert("Preço a pagar: R$"+valorFinal)

        }
    }
    if ((litros <= 20) && (tipoCombustivel === 'B')) {
        valorFinal = ((litros-(litros*(3/100)))*3.30).toFixed(2)
        alert("Preço a pagar: R$"+valorFinal)
    }else {
        if((litros > 20) && (tipoCombustivel === 'B')){
            
            valorFinal = ((litros-(litros*(5/100)))*3.30).toFixed(2)
            alert("Preço a pagar: R$"+valorFinal)

        }
    }


}