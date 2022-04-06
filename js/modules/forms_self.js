function forms() {
    const forms = document.querySelectorAll('form'),
          modalDialog = document.querySelector('.modal__dialog'),
          modalWindow = document.querySelector('.modal');

    const message = {
        loading: './img/form/spinner.svg',
        success: 'We will connect with you in short time',
        failure: 'Ops... what is wrong...'
    };

    forms.forEach(item => {
        postData(item);
    });
    
    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const request = new XMLHttpRequest(),
                  formData = new FormData(form),
                  statusModal = document.createElement('img');

            statusModal.src = message.loading;
            statusModal.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.append(statusModal);
    
            request.open('POST', 'server.php');
            // request.setRequestHeader('Content-type', 'application/json');  // если отправлять "чистую" formData, то эта строка НЕ нужна;
            // request.send(formData);

            let object = {},
                json;

            formData.forEach((key, value) => {
                object[key] = value;
            });

            json = JSON.stringify(object);            
            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusModal.textContent = message.success;
                    form.reset();                    
                    showThanksModal(message.success); 
                } else {
                    showThanksModal( message.failure);
                }                
            }); 
            
            function showThanksModal(message) {
                modalDialog.classList.add('hide');
        
                const thanksModal = document.createElement('div');
                thanksModal.classList.add('modal__dialog');
                thanksModal.innerHTML = `
                    <div class="modal__content">
                        <div data-close class="modal__close">&times;</div>
                        <div class="modal__title">${message}</div>
                    </div>
                `;
                modalWindow.append(thanksModal);
        
                setTimeout(() => {
                    thanksModal.remove();
                    modalDialog.classList.remove('hide');
                    modalDialog.classList.add('show');
                    modalWindow.style.display = "none";
                    statusModal.remove();
                }, 4000);
            }
        });                 
    }    
}
// forms();

export default forms;