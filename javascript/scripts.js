const userEmailElement = document.querySelector('#email');
const userPasswordElement = document.querySelector('#password');
const elementErrorEmail = document.querySelector('#mensagem-error');
const validateLoginBnt = document.querySelector('.button-submit-login');
const showPassword = document.querySelector('.show-password');
const popupElement = document.querySelector('.popup');
const popupCloseElement = document.querySelector('.popup-close');

let validateEmail = () => userEmailElement.value.trim().length > 4;
let validatePassword = () => userPasswordElement.value.trim().length > 4;

const validateLogin = (userEmailElement) => {

    let validateEmail = /\S+@\S+\.\S+/;
    let email = validateEmail.test(userEmailElement.value);

    if (email) {
        emailValid()
        showPopup();
    } else {
        return showMensageError();
    }

}

// Adicionar mensagem de erro 
const showMensageError = () => {
    elementErrorEmail.style.display = "inline-block";

    setTimeout(hiddeError, 5000);

    function hiddeError() {
        elementErrorEmail.style.display = "none";
    }
}

// Validar o botão de ENTRAR
const relaseButtonSingUp = () => {

    let validEmail = validateEmail() ? true : false;
    let validPassword = validatePassword() ? true : false;

    if (validEmail && validPassword) {
        validateLoginBnt.removeAttribute('disabled');
        validateLoginBnt.classList.add('valid-fields');
    } else {
        validateLoginBnt.setAttribute('disabled', 'disabled');
        validateLoginBnt.classList.remove('valid-fields');
    }

}


// Mudar para senha visível
let turn = true;
const viewPassword = (showPassword) => {

    if (turn) {
        showPassword.children[0].classList.remove('bxs-show');
        showPassword.children[0].classList.add('bxs-hide');
        userPasswordElement.removeAttribute('type');
        userPasswordElement.setAttribute('type', 'text');
        turn = false;
    } else {
        showPassword.children[0].classList.remove('bxs-hide');
        showPassword.children[0].classList.add('bxs-show');
        userPasswordElement.removeAttribute('type');
        userPasswordElement.setAttribute('type', 'password');
        turn = true;
    }

}

// Email válido
const emailValid = () => {
    elementErrorEmail.style.display = "none";
}

// Mostrar popup e fechar popup
const showPopup = () => {
    popupElement.style.display = 'block';

    setTimeout(hiddePopup, 5000);
    function hiddePopup() {
        popupElement.style.display = 'none';
    }

}

const hiddePopup = () => {
    popupElement.style.display = 'none';
}

userEmailElement.addEventListener('keyup', () => relaseButtonSingUp());
userPasswordElement.addEventListener('keyup', () => relaseButtonSingUp());
showPassword.addEventListener('click', () => viewPassword(showPassword));
validateLoginBnt.addEventListener('click', () => validateLogin(userEmailElement));
popupCloseElement.addEventListener('click', () => hiddePopup());