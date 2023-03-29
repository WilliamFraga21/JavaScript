// // const animais = document.getElementById('animais');
// console.log(animais);

// // const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection[1])

// const primeiraLi = document.querySelector('li');
// console.log(primeiraLi)

// const primeiraUl = document.querySelector('ul');
// console.log(primeiraUl)

// const linkInterno = document.querySelector('[href^="#"]');
// console.log(linkInterno);

// const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg[0]);

// // const gridSectionHTML = document.getElementsByClassName('grid-section');
// // const gridSectionNode = document.querySelectorAll('.grid-section');

// primeiraUl.classList.add('grid-section');

// // console.log(gridSectionHTML[0]);
// // console.log(gridSectionNode[0]);

// gridSectionNode.forEach(function(item, index){
//   console.log(item);
// });

// const arrayGrid = Array.from(gridSectionHTML);

// arrayGrid.forEach(function(item) {
//   console.log(item);
// })


// ID
// getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');

// CLASSE E TAG
// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
// const gridSection = document.getElementsByClassName('grid-section');
// const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
// console.log(gridSection[0]);

// SELETOR GERAL ÚNICO
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

// SELETOR GERAL LISTA
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

// const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// // Retorna o segundo elemento
// console.log(gridSection[1]);

// Diferente do getElementsByClassName, a lista aqui é estática

// HTMLCOLLECTION VS NODELIST
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

// ARRAY-LIKE
// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});

// É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)


// EXERCÍCIO
// Retorne no console todas as imagens do site

const imgs2 = document.querySelectorAll('img');
console.log(imgs2);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagems = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagems);

// Selecione todos os links internos (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao

const h2 = document.querySelector('.animais-descricao h2');
console.log(h2);

// Selecione o último p do site
 


const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length-1]);