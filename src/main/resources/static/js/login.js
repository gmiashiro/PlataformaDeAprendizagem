document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('error')) {
        const formInputs = document.querySelector('.form-inputs');

        if (formInputs) {
            const errorMsg = document.createElement('p');
            errorMsg.textContent = 'E-mail ou senha inválidos. Tente novamente.';
            errorMsg.style.color = 'red';
            errorMsg.style.textAlign = 'center';
            errorMsg.style.marginBottom = '15px';

            formInputs.prepend(errorMsg);
        }
    }
});