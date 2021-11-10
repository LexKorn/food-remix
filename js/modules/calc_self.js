function calc() {
    const calcField = document.querySelector('.calculating__field'),
        //   female = calcField.querySelector('#female'),
          gender = calcField.querySelectorAll('#gender .calculating__choose-item'),
          height = calcField.querySelector('#height'),
          weight = calcField.querySelector('#weight'),
          age = calcField.querySelector('#age'),
          activity = calcField.querySelector('.calculating__choose_big');


    gender.forEach(item => {
        if (item.classList.contains('calculating__choose-item_active')) {
            console.log(item.getAttribute('id'));
        }
        item.addEventListener('click', () => {
                item.classList.toggle('calculating__choose-item_active');
                console.log(item.getAttribute('id'));
            });
    });

}

calc();

// export default calc;