/*=============== MOSTRA MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*Menu Show*/

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*Menu Escondido*/

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')


const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
 //Quando clicar em um link fechar o menu
 navMenu.classList.remove('show-menu')
} 
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== Desfoca Cabeçalho ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       :header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/ 
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    //reset: true, //Animations repeat 
})

sr.reveal(`.home__img, .desf__data, .styling__img, .contact__content, .footer`)
sr.reveal(`.home__data, .styling__list, .contact__img`, {delay: 500})
sr.reveal(`.desf__card`, {delay: 500, interval: 100})
sr.reveal(`.collection__card`, {delay: 500, interval: 100})