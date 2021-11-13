function slider() {
    const slides = document.querySelectorAll('.offer__slide'),
          current = document.querySelector('#current'),
          total = document.querySelector('#total'),
          btnPrev = document.querySelector('.offer__slider-prev'),
          btnNext = document.querySelector('.offer__slider-next'),
          wrapper = document.querySelector('.offer__slider-wrapper');

    let activeIndex = 0;

    slides.forEach(item => {
        item.classList.add('hide');        
    });

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
        });
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
    });

    btnNext.addEventListener('click', () => {        
        if (activeIndex === slides.length - 1) {
            activeIndex = 0;
        } else {
            activeIndex++;            
        }
        currentIndex();
        showSlide();
    });

    const indicators = document.createElement('ol'),
          dots = [];
    
    wrapper.style.position = 'relative';

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    wrapper.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #eee;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);        
    }

    dots.forEach((item, i) => {        
        item.addEventListener('click', () => {        
            activeIndex = i;            
            currentIndex();
            showSlide();
            item.style.opacity = 1;
        });
    });
}

slider();

// export default slider;