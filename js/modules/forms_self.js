function formas() {
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'loading...',
        success: 'Thank you! We will sent you in near time',
        failary: 'Ops... what is wrong...'
    };

    forms.forEach(item => {
        postData(item);
    });
    
    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const request = new XMLHttpRequest(),
                  formData = new FormData(form),
                  statusModal = document.createElement('div');

            statusModal.classList.add('status-modal');
            statusModal.textContent = message.loading;
            form.append(statusModal);
    
            request.open('POST', 'server.php');
            request.send(formData);

            request.addEventListener('load', () => {
                console.log(request.response);
                statusModal.textContent = message.success;
            });
            
        });
        
    }
}
formas();

// export default formas;