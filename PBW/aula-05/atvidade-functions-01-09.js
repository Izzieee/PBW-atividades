//1
function saudacao() {
  console.log("Olá, estudante!");
}

/*saudacao();*/

//2
function boasVindas(nome) {
  console.log(`Olá, ${nome}!`);
}

/*boasVindas("Jacyane Martins");*/

//3
function somar(a, b) {
  console.log(a + b);
}

/*somar(4,6);*/

//4
function dobro(num) {
  console.log(num * 2);
}

/*dobro(3.5);*/

//5
function verificarIdade(id) {
  if (id >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}

/*verificarIdade(2);
verificarIdade(19);*/

//6
function multiplicar(num, x) {
  return num * x;
}

/*const result = multiplicar(3, 7);
console.log(result);*/

//7
function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

/*const result = calcularMedia(8, 9);
console.log(result);*/

//8
function situacaoAluno(n1, n2) {
  const media = (n1 + n2) / 2;
  if (media >= 7) {
    console.log("Aprovado");
  } else if (media >= 5 && media < 7) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}

/*situacaoAluno(9,9);
situacaoAluno(1,1);
situacaoAluno(6,6);*/

//9
function repetirMensagem(msg, qt) {
  for (let i = 1; i <= qt; i++) {
    console.log(i, msg);
  }
}

/*repetirMensagem("aiaiaiai",10);*/
