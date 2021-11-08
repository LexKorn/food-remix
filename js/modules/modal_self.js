function modal() {
    const btn = document.querySelectorAll('.btn'),
          modalWindow = document.querySelector('.modal');

    
    btn.forEach(item => {
        item.addEventListener('click', () => {
            modalWindow.style.display = "block";
        });
    });

}

modal();

// export default modal;