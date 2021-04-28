const nav=document.querySelector('.nav');
const navFade=function (e,opac) {
    
    // if (e.target.classList.contains('nav__item')) {
    //     let hovered=e.target;
    //     let otherItems=hovered.closest('.nav').querySelectorAll('.nav__item');
    //     let icon=hovered.closest('.nav').querySelector('.icon');
        
    //     otherItems.forEach(element => {
    //         if (element !== hovered) {
    //          element.style.opacity=this;   
    //         }
    //     });
    //     icon.style.opacity=this;
        
    // }
    if (e.target.classList.contains('nav__item')) {
        let hovered=e.target;
        let otherItems=hovered.closest('.nav').querySelectorAll('.nav__item');
        let icon=hovered.closest('.nav').querySelector('.icon');
        
        otherItems.forEach(element => {
            if (element !== hovered) {
             element.classList.toggle('faded');   
            }
        });
        // icon.style.opacity=this;
        
    }
};

nav.addEventListener('mouseover',navFade.bind(0.5));
nav.addEventListener('mouseout',navFade.bind(1));