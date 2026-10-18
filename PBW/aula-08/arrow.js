
// EXERCÍCIO 1

console.log("===== EXERCÍCIO 1 — Cadastro de Aluno =====");

const nome = prompt("Exercício 1 — Digite o nome do aluno:");
const idade = Number(prompt("Exercício 1 — Digite a idade do aluno:"));
const turma = prompt("Exercício 1 — Digite a turma do aluno:");
const nota1 = Number(prompt("Exercício 1 — Digite a primeira nota:"));
const nota2 = Number(prompt("Exercício 1 — Digite a segunda nota:"));

const aluno = {
  nome: nome,
  idade: idade,
  turma: turma,
  nota1: nota1,
  nota2: nota2
};

const calcularMedia = (n1, n2) => (n1 + n2) / 2;

const verificarSituacao = (media) => {
  if (media >= 7) return "Aprovado";
  else if (media >= 5) return "Recuperação";
  else return "Reprovado";
};

aluno.media = calcularMedia(aluno.nota1, aluno.nota2);
aluno.situacao = verificarSituacao(aluno.media);

console.log(aluno);


// EXERCÍCIO 2
console.log("\n===== EXERCÍCIO 2 — Tabuada =====");

const numero = Number(prompt("Exercício 2 — Digite um número para ver a tabuada:"));

const tabuada = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
};

tabuada(numero);


// EXERCÍCIO 3
console.log("\n===== EXERCÍCIO 3 — Média de Notas =====");

const notas = [7.5, 8.0, 5.5, 9.0, 6.0];

const somarNotas = (array) => {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
};

const calcularMediaArray = (array) => somarNotas(array) / array.length;

const soma = somarNotas(notas);
const media = calcularMediaArray(notas);

const situacaoTurma = (m) => {
  if (m >= 7) return "Turma Aprovada";
  else if (m >= 5) return "Turma em Recuperação";
  else return "Turma Reprovada";
};

console.log("Notas:", notas);
console.log("Soma:", soma);
console.log("Média:", media.toFixed(2));
console.log("Situação:", situacaoTurma(media));


// EXERCÍCIO 4
console.log("\n===== EXERCÍCIO 4 — Produtos com Desconto =====");

const produtos = [
  { nome: "Arroz", preco: 25.90 },
  { nome: "Feijão", preco: 8.50 },
  { nome: "Óleo", preco: 7.20 },
  { nome: "Café", preco: 18.00 },
  { nome: "Leite", preco: 5.80 }
];

const aplicarDesconto = (preco, percentual) =>
  preco - (preco * percentual / 100);

for (let i = 0; i < produtos.length; i++) {
  const produto = produtos[i];
  const precoComDesconto = aplicarDesconto(produto.preco, 10);

  console.log(`Produto: ${produto.nome}`);
  console.log(`Preço original: R$ ${produto.preco.toFixed(2)}`);
  console.log(`Com desconto (10%): R$ ${precoComDesconto.toFixed(2)}`);

  if (precoComDesconto < 10) {
    console.log("Preço acessível!");
  } else {
    console.log("Preço regular.");
  }
  console.log("---------------------");
}


// EXERCÍCIO 5
console.log("\n===== EXERCÍCIO 5 — Mensagens Personalizadas =====");

const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 25 },
  { nome: "Carla", idade: 42 },
  { nome: "Diego", idade: 14 }
];

const gerarMensagem = (pessoa) => {
  if (pessoa.idade < 18) {
    return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos e é menor de idade.`;
  } else if (pessoa.idade < 60) {
    return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos e é adulto(a).`;
  } else {
    return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos e é idoso(a).`;
  }
};

for (let i = 0; i < pessoas.length; i++) {
  console.log(gerarMensagem(pessoas[i]));
}
