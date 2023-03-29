// TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'William';

nome.length; // 7
nome.charAt(1); // 'i'
nome.replace('iam', 'ian'); // 'Willian'
nome; // 'willian'

// Uma string herda propriedades e métodos do construtor String()


// NÚMEROS
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

// FUNÇÕES
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

// ELEMENTOS DO DOM
<a class="btn">Clique</a>
COPIAR
var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

// EXERCÍCIO
// nomeie 3 propriedades ou métodos de strings

var nome = 'William';
// fixed
// length
// slice

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn');
// addEventListener
// appendChild
// id
// innerHtml
// outerHtml

console.log(btn);

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V



