// Todos são primitivos exceto os objetos.

var nome = 'william'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object


var nome = 'William'
console.log(typeof nome);
//Vai retorna uma string
//typeof null retorna object


// Você pode somar uma string e assim concatenar as palavras.

var nome = 'william';
var sobrenome = 'Victor';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var time = 'São Paulo';
var gols = 6;
var times= time + ' ' + 'Fez'+ ' '+ gols +' '+'Gols';
console.log(times);


// ASPAS DUPLAS, SIMPLES E TEMPLATE STRING

// 'JavaScript é "super" fácil';
// "JavaScript é 'super' fácil";
// "JavaScript é \"super\" fácil";
// `JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

// TEMPLATE STRING


var gols = 1000;
// var frase1 = 'william fez ' + gols + ' gols';
var frase2 = `william fez ${gols} gols`; //Utilizando Template String
console.log(frase2);


// Você deve passar expressões / variáveis dentro de ${}




// Declare uma variável contendo uma string

var nome = 'william';

// Declare uma variável contendo um número dentro de uma string

var numero = '1500';

// Declare uma variável com a sua idade

var idade = 22;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var nome = 'william';
var sobrenome = 'Victor';
var nomeCompleto = `${nome} ${sobrenome}`;

// Coloque a seguinte frase em uma variável: It's time

var variavel = "It's time";

// Verifique o tipo da variável que contém o seu nome

console.log(typeof nome);