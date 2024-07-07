
// We select the elements needed to add the toggle effect
const btnMenu = document.querySelector('.btn-rond-menu');


const nav = document.querySelector('.nav-gauche');


const allItemNav = document.querySelectorAll('.nav-menu-item');


const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', ()=>{
    // switching between 2 visual effects for the 3 lines
    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})


// Media queries used with js 
// if the width is < 1300 px

if(window.matchMedia('(max-width: 1300px)')) {
// On all item is added an eventlistener 
// for each item
    allItemNav.forEach(item => { 
        item.addEventListener('click', () => { 
            // Each we click the active class is added, to hide the menu
            nav.classList.toggle('menu-visible') 
            
            ligne.classList.toggle('active'); 
        })
    })

}


