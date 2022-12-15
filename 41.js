function notas() {

    let nota1 = document.getElementById("nota1");
    nota1 = parseFloat(nota1.value);

    let nota2 = document.getElementById("nota2");
    nota2 = parseFloat(nota2.value);

    let nota3 = document.getElementById("nota3");
    nota3 = parseFloat(nota3.value);

    let mediaExercicios = (nota1 + nota2 + nota3) / 3
    let mediaAprov = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7

    if (mediaAprov >= 9) {
        alert("Conceito A")
    } else {
        if ((mediaAprov >= 7.5) && (mediaAprov < 9)) {
            alert("Conceito B")
        } else {
            if ((mediaAprov >= 6) && (mediaAprov < 7.5)) {
                alert("Conceito C")
            } else {
                alert("Conceito D")
            }
        }
    }
}