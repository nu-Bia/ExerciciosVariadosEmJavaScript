function soma(){
    var numero1=(prompt("informe o número de horas trabalhadas em um mês:"));
    var numero2=(prompt("informe o salário por hora:"));
    var horaextra=numero1-160;
    var valorhoraextra=numero2+(numero1*50/100)
    
        if (numero1<=160) {
        alert("Você não tem direito a horas extra :")}

        if (numero1>160){
        alert("Você tem direito a hora extra")}

        alert("O total de hora extra foi de: "+ horaextra);
        alert("O valor das horas extras será de : " + valorhoraextra);
}
        


    
   
 








