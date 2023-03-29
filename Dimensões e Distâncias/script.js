// HEIGHT E WIDTH
// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

// const section = document.querySelector('.animais');

// section.clientHeight; // height + padding
// section.offsetHeight; // height + padding + border
// section.scrollHeight; // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth ...

// OFFSETTOP E OFFSETLEFT
// const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
// section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
// section.offsetLeft;

// GETBOUNDINGCLIENTRECT()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// WINDOW
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

// MATCHMEDIA();
// Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

// DICA
// Selecione o elemento no inspetor (dom)

// Abra o console e digite $0 para selecionar o mesmo

// Os elementos selecionados anteriormente são $1, $2 ...




// EXERCÍCIO
// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img');
const imgtop = img.offsetTop;

// Retorne a soma da largura de todas as imagens

function somaImg (){
  const img2 = document.querySelectorAll('img');
  let soma2 = 0;
  img2.forEach((img2) => {
    soma2 += img2.offsetWidth;
    
  })
  console.log(soma2);
}

window.onload = function() {
  somaImg();
} 
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = document.offsetWidth;
  const linkHeight = document.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log('Possui acessibilidade')
  }else{
    console.log('Não possui acessibilidade')
  }

})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu


const browser = window.matchMedia('(max-width: 720px)').matches;

if (browser) {
  const menu = document.querySelectorAll('.menu');
  menu.classList.add('menu-mobile');  
}


