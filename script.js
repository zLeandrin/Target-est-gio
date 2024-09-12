// desafio 1
// Calcula a soma dos números de 1 até um determinado índice
let indice = 13; // Define o limite superior da soma
let soma = 0; // Inicializa a variável para armazenar a soma
let k = 0; // Contador do loop

// Loop para somar os números de 1 até o índice
while (k < indice) {
  k++; // Incrementa o contador
  soma += k; // Adiciona o valor atual de k à soma
}

console.log("O valor da variável soma é:");
console.log(soma);


//desafio 2
// Gera a sequência de Fibonacci até um determinado número e verifica se um número está presente

let n = 10; // Define o número máximo da sequência

function fibonacci(n) {
  // Inicializa um array para armazenar a sequência
  let fib = [0, 1];

  // Calcula os próximos números da sequência
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

let sequencia = fibonacci(n);

let campo = 2; // Número a ser buscado na sequência

// Verifica se o número está na sequência
if (sequencia.includes(campo)) {
  console.log("Este número está dentro da sequência de Fibonacci");
} else {
  console.log("Este número não está dentro da sequência de Fibonacci");
}

//desafio 3 (não encontrei o json do exercicio)

// Analisa dados de faturamento diário
let faturamentoDiario = [100, 310, 552, 50]; // Dados de faturamento

// Calcula o menor e maior faturamento
let menorFaturamento = Math.min.apply(null, faturamentoDiario);
let maiorFaturamento = Math.max.apply(null, faturamentoDiario);

// Calcula a soma total e a média do faturamento
let soma2 = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  soma2 += faturamentoDiario[i];
}
let media = soma2 / faturamentoDiario.length;

// Conta os dias com faturamento acima da média
let diasAcimaDaMedia = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > media) {
    diasAcimaDaMedia++;
  }
}

// Imprime os resultados
console.log("O faturamento é de:", faturamentoDiario);
console.log("Dias com o faturamento acima da média:", diasAcimaDaMedia);
console.log("O menor faturamento:", menorFaturamento);
console.log("O maior faturamento:", maiorFaturamento);


//desafio 4
let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;
let allEstados = sp + rj + mg + es + outros;

// Função para calcular o percentual de um estado
function calcularPercentual(estado, total) {
  return parseInt((estado * 100) / total);
}

console.log("Porcentagem dos estados")
// Calculando e imprimindo o percentual para cada estado
console.log("SP:", calcularPercentual(sp, allEstados), "%");
console.log("RJ:", calcularPercentual(rj, allEstados), "%");
console.log("MG:", calcularPercentual(mg, allEstados), "%");
console.log("ES:", calcularPercentual(es, allEstados), "%");
console.log("Outros:", calcularPercentual(outros, allEstados), "%");

//desafio 5
// Inverter os caracteres de uma string

function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  
  let minhaString = "Palavra";
  let stringInvertida = inverterString(minhaString);
  console.log(minhaString);
  console.log("A string invertida:", stringInvertida);
