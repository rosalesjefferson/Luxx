const backToTop = document.querySelector('.up');

window.addEventListener('scroll', () => {
    const scrolled = Math.floor(window.scrollY);
    const screenSize = Math.floor(window.outerWidth);
    console.log(screenSize);
    // console.log(window);
    // console.log(scrolled);

    if(scrolled >= 100 && screenSize <= 1023){
        backToTop.style.display = 'unset';
    } else{
        backToTop.style.display = 'none';
    }
});
    
