// NÚMEROS
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000


// OPERADORES ARITMÉTICOS
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// OPERADORES ARITMÉTICOS (STRINGS)
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

// É possível verificar se uma variável é NaN ou não com a função isNaN()

// A ORDEM IMPORTA
// Começa por multiplicação e divisão, depois por soma e subtração.

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// Parênteses para priorizar uma expressão

// OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

// Mesma coisa para o decremento --x

// OPERADORES ARITMÉTICOS UNÁRIOS
// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// O - antes de um número torna ele negativo





// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN

var numero1 = 'dois 2';
var numero2 = '1 um';

// Somar a string '200' com o número 50 e retornar 250

var soma = +'200' + 50;

// Incremente o número 5 e retorne o seu valor incrementado

var numero5 = 4;
console.log(++numero5);

// Como dividir o peso por 2?
var numero = +'80'/2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number)
