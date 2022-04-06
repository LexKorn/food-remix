function calc() {
    const result = document.querySelector('.calculating__result span');

    let sex = 'female', 
        height, weight, age, 
        ratio = 1.375;

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;
        } else {
            if (sex === 'female') {
                result.textContent = `${Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)}`;
            } else {
                result.textContent = `${Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)}`;
            }
        }
    }
    calcTotal();


    function getStaticInfo(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = e.target.getAttribute('data-ratio');
                } else {
                    sex = e.target.getAttribute('id');
                }

                elements.forEach(elem => {
                    elem.classList.remove(`${activeClass}`);
                });            
                e.target.classList.add(`${activeClass}`);
                calcTotal();
            });
        });
    }
    getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');
    getStaticInfo('#gender', 'calculating__choose-item_active');

    function num(x) {
        if (isNaN(x.value)) {
            x.style.border = "3px solid red";
        } else {
            x.style.border = "none";
        }
    }

    function getDinamicInfo(selector) {
        const input = document.querySelector(`${selector}`);

        input.addEventListener('input', (e) => {
            switch (e.target.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    num(input);
                    break;
                case 'weight':
                    weight = +input.value;
                    num(input);
                    break;
                case 'age':
                    age = +input.value;
                    num(input);
                    break;
            }        
            calcTotal();
        });    
    }
    getDinamicInfo('#height');
    getDinamicInfo('#weight');
    getDinamicInfo('#age');
}
// calc();

export default calc;