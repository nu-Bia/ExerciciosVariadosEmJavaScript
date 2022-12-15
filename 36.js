
    function idade() {

        let homem1 = document.getElementById("homem1");
        homem1 = parseInt(homem1.value);

        let homem2 = document.getElementById("homem2");
        homem2 = parseInt(homem2.value);

        let mulher1 = document.getElementById("mulher1");
        mulher1 = parseInt(mulher1.value);

        let mulher2 = document.getElementById("mulher2");
        mulher2 = parseInt(mulher2.value);

        let newMan, oldMan, newLady, oldLady, soma, produto = 0

        if (homem2 > homem1) {
            newMan = homem1;
            oldMan = homem2;
        } else {
            newMan = homem2;
            oldMan = homem1;
        }
        if (mulher2 > mulher1) {
            newLady = mulher1;
            oldLady = mulher2;
        } else {
            newLady = mulher2;
            oldLady = mulher1;
        }
        soma = oldMan+newLady;
        produto = newMan*oldLady

        alert("A soma das idades do homem mais velho com a mulher mais nova é "+soma+"\nO produto das idades do homem mais novo com a mulher mais velha é "+produto)
    }