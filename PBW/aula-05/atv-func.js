function saudacao() {
    console.log("Olá, estudante!");

}

/*saudacao();*/

function boasVindas(nome) {
    console.log(`Olá, ${nome}!`);
}

/*boasVindas("Jacyane Martins");*/

function somar(a, b) {
    console.log(a + b);
}

/*somar(4,6);*/

function dobro(num) {
    console.log(num * 2);
}

/*dobro(3.5);*/

function verificarIdade(id) {
    if (id >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade");
    }
}

/*verificarIdade(2);
verificarIdade(19);*/

function multiplicar(num, x) {
    return num * x;
}

/*const result = multiplicar(3, 7);
console.log(result);*/

function calcularMedia(n1, n2) {
    console.log(`${(n1 +n2) / 2}`);
}

/*calcularMedia(8, 9);*/