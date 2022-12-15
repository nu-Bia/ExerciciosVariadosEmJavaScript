function fruta() {
    function calcular() {

        let quilosMaca = document.getElementById("quilosMaca");
        quilosMaca = parseFloat(quilosMaca.value);

        let quilosMorango = document.getElementById("quilosMorango");
        quilosMorango = parseFloat(quilosMorango.value);

        let totalFrutas, valorTotal, valorMorango, valorMaca = 0

        if (quilosMaca > 5) {
            valorMaca = quilosMaca * 1.5
        } else {
            valorMaca = quilosMaca * 1.8
        }

        if (quilosMorango > 5) {
            valorMorango = quilosMorango * 2.2
        } else {
            valorMorango = quilosMorango * 2.5
        }
        totalFrutas = quilosMaca + quilosMorango;
        valorTotal = (valorMaca + valorMorango);

        if ((totalFrutas > 8) || (valorTotal > 25)) {
            valorTotal = valorTotal - (valorTotal / 10)
        }

        alert("Quantidade de quilos de maçã: " + quilosMaca + "\nValor total de maçã: R$" + valorMaca + "\n" + "\n" + "Quantidade de quilos de morango: " + quilosMorango + "\nValor total de morango: R$" + valorMorango + "\n" + "\n" + "Total a pagar: R$" + valorTotal)

    }}