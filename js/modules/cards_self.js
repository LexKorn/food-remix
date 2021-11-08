function cards() {
    const menuFood = document.querySelector('.menu__item');

    class MenuItem {
        constructor (src, alt, title, descr, price) {
            this.src = src,
            this.alt = alt,
            this.title = title,
            this.descr = descr,
            this.price = price
        }

        render() {
            const element = document.createElement('div');

            element.innerHTML = `
                <img src="img/tabs/vegy.jpg" alt="vegy">
                <h3 class="menu__item-subtitle">Меню "Фитнес"</h3>
                <div class="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>229</span> грн/день</div>
                </div>
            `;
        }
    }

}

cards();

// export default cards;


/*
<div class="container">
    <div class="menu__item">
        <img src="img/tabs/vegy.jpg" alt="vegy">
        <h3 class="menu__item-subtitle">Меню "Фитнес"</h3>
        <div class="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>229</span> грн/день</div>
        </div>
    </div>                
</div>
*/