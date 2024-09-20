window.onscroll=function(){
    toggleScroll();
}

function toggleScroll() {
    const scrollToTopBtn =document.querySelector('.to-top')

    if (window.scrollY > 200) {
        scrollToTopBtn.style.opacity= '1';
        // scrollToTopBtn.classList.add('visible')
    }
    else {
        scrollToTopBtn.style.opacity= '0';
        // scrollToTopBtn.classList.remove('visible')
    }      
}