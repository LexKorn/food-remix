function modal() {
    const btn = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal');
    
    btn.forEach(item => {
        item.addEventListener('click', () => {
            modalWindow.style.display = "block";
        });        
    });    

    function closeModal() {
        modalWindow.style.display = "none";
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        } 
    });

    document.addEventListener('click', (e) => {
        if (modalWindow.style.display === "block") {
            if (e.target == modalWindow || e.target.getAttribute('data-close') === '') {
                closeModal();
            }
        }        
    });
}
// modal();

export default modal;