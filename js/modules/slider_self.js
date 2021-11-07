function slider() {
    const slides = document.querySelectorAll('.offer__slide'),
          current = document.querySelector('#current'),
          total = document.querySelector('#total'),
          btnPrev = document.querySelector('.offer__slider-prev'),
          btnNext = document.querySelector('.offer__slider-next');

    let activeIndex = 0;

    slides.forEach(item => {
        item.classList.add('hide');        
    })

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = `${slides.length}`;
    }

    function currentIndex() {
        if (activeIndex < 10) {
            current.textContent = `0${activeIndex + 1}`;
        } else {
            current.textContent = `${activeIndex + 1}`;
        }
    }    

    function showSlide() {
        slides.forEach((item, i) => {
            if (i === activeIndex) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        })
    }
    showSlide();

    btnPrev.addEventListener('click', () => {        
        if (activeIndex === 0) {
            activeIndex = slides.length - 1;
        } else {
            activeIndex--;            
        }
        currentIndex();
        showSlide();
    })

    btnNext.addEventListener('click', () => {        
        if (activeIndex === slides.length - 1) {
            activeIndex = 0;
        } else {
            activeIndex++;            
        }
        currentIndex();
        showSlide();
    })


}

slider();

// export default slider;