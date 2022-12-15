function soma() {
    var numero1=(prompt("Qual o valor do sálario fixo : "));
    var numero2=(prompt("Qual o valor das vendas : "));
    var total=numero2*0,03
    var total1=numero2*0,05
    var total2=numero1+total+total1;
    if(numero2<=1500) {
        alert("A comissão será de :" + total)}
    else {
    alert("A comissão será de : " + total1)}
    alert("Potanto o sálario final será de : " + total2) 
    }




