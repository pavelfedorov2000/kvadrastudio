window.addEventListener('DOMContentLoaded', () => {
    app.burger.init();

    new Swiper('.reviews-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        speed: 1000,
        navigation: {
            nextEl: '.slider-arrow--next',
            prevEl: '.slider-arrow--prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    const animatedItems = document.querySelectorAll('.animated');

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target)
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }

    const options = {
        // root: по умолчанию window, но можно задать любой элемент-контейнер
        rootMargin: '0px 0px 75px 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);

    animatedItems.forEach((item) => observer.observe(item));
});