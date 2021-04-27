// плавный скролл

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// подсветка якорной ссылки при скролле

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
   
    document.querySelectorAll('.nav-class').forEach((el, i) => {
        if (el.offsetTop <= scrollDistance) {
            document.querySelectorAll('nav a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });
            document.querySelectorAll('.main__slider-link')[i].classList.add('active');
        }
    })
})


