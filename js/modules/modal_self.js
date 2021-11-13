function modal() {
    const btn = document.querySelectorAll('.btn'),
          modalWindow = document.querySelector('.modal'),
          modalCloser = document.querySelector('.modal__close');

    
    btn.forEach(item => {
        item.addEventListener('click', () => {
            modalWindow.style.display = "block";
        });        
    });    

    function closeModal() {
        modalWindow.style.display = "none";
    }

    modalCloser.addEventListener('click', () => {
        closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        } 
    });

    document.addEventListener('click', (e) => {
        if (modalWindow.style.display === "block") {
            if (e.target == modalWindow) {
                closeModal();
            }
        }        
    });

}

modal();

// export default modal;