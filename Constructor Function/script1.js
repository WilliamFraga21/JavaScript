function initTabNav() {

  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');


  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');

  function activetab(index){
    tabContent.forEach(section => {
      section.classList.remove('ativo');
    });

    tabContent[index].classList.add('ativo');


  }


  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', function() {
      activetab(index);
    })
  })

  }


}

initTabNav();


function initAccordion(){

    const accordionList = document.querySelectorAll('.js-accordion dt');

if (accordionList.length) {
  accordionList[0].classList.add('ativo');
  accordionList[0].nextElementSibling.classList.add('ativo');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  })
}


}


initAccordion();




function initScrollSuave(){


  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');


    function scrollToSection (event){
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      const topo = section.offsetTop;

      // window.scrollTo({
      //   top: topo,
      //   behavior: 'smooth',
      // });


      section.scrollIntoView({

        behavior: 'smooth',
        block: 'start',


      });


      


    }


    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    })




}


initScrollSuave();


function initScroll(){

    
  const sections = document.querySelectorAll('.js-scroll');


  if (sections.length) {
    
    const windowsMetade = window.innerHeight * 0.7;

    function animaScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowsMetade) < 0;

        if (isSectionVisible ) {
          section.classList.add('ativo');
        }

      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);


  }

}

initScroll();










