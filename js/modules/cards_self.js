function cards() {
    const menuCard = document.querySelector('#contMenu');

    let element = document.createElement('div');

    class MenuItem {
        constructor (src, alt, title, descr, price) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
        }

        render() {
            if (element.classList.contains('menu__item')) {
                element = document.createElement('div');
                element.classList.add('menu__item');
            } else {
                element.classList.add('menu__item');
            }

            element.innerHTML = `  
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб./день</div>
                </div>
            `;
            return menuCard.append(element);            
        }
    }

    /*
    const firstMenu = new MenuItem(
                "img/tabs/vegy.jpg", 
                'vega', 
                'Меню Фитнес', 
                'Меню Фитнес - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
                10),
          secondMenu = new MenuItem(
                "img/tabs/post.jpg", 
                'post', 
                'Меню Постное', 
                'Меню Постное - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
                15),
            thirdMenu = new MenuItem(
                "img/tabs/elite.jpg", 
                'elite', 
                'Меню Премиум', 
                'В меню Премиум мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
                20);

    firstMenu.render();
    secondMenu.render();
    thirdMenu.render();
    */
    
    axios.get('http://localhost:3000/menu')
        .then(function (response) {
            console.log(response);
            response.data.forEach(({img, alting, title, descr, price}) => {
                new MenuItem(img, alting, title, descr, price).render();
            });

        })
        .catch(function (error) {
            console.log(error);
        });
}

// cards();

export default cards;