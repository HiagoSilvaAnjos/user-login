const userEmailElement = document.querySelector('#email');
const userPasswordElement = document.querySelector('#password');
const elementErrorEmail = document.querySelector('#mensagem-error');
const validateLoginBnt = document.querySelector('.button-submit-login');
const showPassword = document.querySelector('.show-password');
const popupElement = document.querySelector('.popup');
const popupCloseElement = document.querySelector('.popup-close');

// validar se os inpust estão preenchidos
let validateEmail = () => userEmailElement.value.trim().length >= 4;
let validatePassword = () => userPasswordElement.value.trim().length >= 4;

// evento de foco nos íconis dos inputs Email e Password
// Input email
userEmailElement.addEventListener('focus', () => changeIconColorEmail());
userEmailElement.addEventListener('blur', () => removeChangeIconColor());

const changeIconColorEmail = () => {
    const iconElement = document.getElementById('icon-email');
    iconElement.style.color = "#7c58da"
}

const removeChangeIconColor = () => {
    const iconElement = document.getElementById('icon-email');
    iconElement.style.color = "#3b3939ce";
}

// Input Password
userPasswordElement.addEventListener('focus', () => changeIconColorPassword());
userPasswordElement.addEventListener('blur', () => removeChangeIconColorPassword());

const changeIconColorPassword = () => {
    const iconElement = document.getElementById('icon-password');
    iconElement.style.color = "#7c58da";
}

const removeChangeIconColorPassword = () => {
    const iconElement = document.getElementById('icon-password');
    iconElement.style.color = "#3b3939ce";
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

// validar o email de login ao clicar no botão
const validateLogin = () => {

    let validateEmail = /\S+@\S+\.\S+/;
    let email = validateEmail.test(userEmailElement.value);

    if (email) {
        removeMenssageError()
    }

    if (!email) {
        return showMensageError();
    }

    // Autenticar dados para login
    let listUser = [];

    let userValid = {
        email: "",
        password: "",
        userName: ""
    }

    // Pegar os dados salvos no localStorage da página signup
    listUser = JSON.parse(localStorage.getItem('listaUser'));

    // se nenhum cadastro for feito na página signup
    if (listUser === null) {
        return showPopupError();
    }

    // validar se os dados castrados então iguais aos digitados
    listUser.forEach(element => {

        if (userEmailElement.value == element.email && userPasswordElement.value == element.password) {
            userValid = {
                email: element.email,
                password: element.password,
                userName: element.userName
            }
        }
    });

    // Validar email e senha
    if (userEmailElement.value == userValid.email && userPasswordElement.value == userValid.password) {

        showPopup();

        // Criando um token para o usuário
        let token = Math.random().toString(16).substring(2) +  Math.random().toString(16).substring();

        // salvar token no localStorage
        localStorage.setItem('token', token);

        // Salvar no localStorage a autenticação do usuário
        localStorage.setItem('userLogin', JSON.stringify(userValid));

        // abrir a pagina main
        setTimeout(() => {
            window.location.href = './main.html';
        }, 5000)
      
    } else {
        return showPopupError();
    }
}

// Vai remover a mensagem de error se o email for válido
const removeMenssageError = () => {
    elementErrorEmail.style.display = "none";
}

// Mostrar popup
const showPopup = () => {
    const loading = document.getElementById('loading');
    const textPopup = document.getElementById('popup-text');

    loading.style.display = 'block';
    popupElement.style.display = 'flex';

    textPopup.innerText = "Aguarde..."
    popupElement.classList.remove('popupError');
    popupElement.classList.add('popup');

    setTimeout(hiddePopup, 5000);

}

// Mostrar popup de error
const showPopupError = () => {
    const textPopup = document.getElementById('popup-text');
    const loading = document.getElementById('loading');

    loading.style.display = 'none';
    popupElement.style.display = 'block';

    textPopup.innerText = "E-mail ou senha incorretos"
    popupElement.classList.remove('popup');
    popupElement.classList.add('popupError');

    userEmailElement.focus();

    setTimeout(hiddePopup, 5000);

}

// fechar popup
const hiddePopup = () => {
    popupElement.style.display = 'none';
}

// Adicionar mensagem de erro 
const showMensageError = () => {
    elementErrorEmail.style.display = "inline-block";

    setTimeout(hiddeError, 5000);

    function hiddeError() {
        elementErrorEmail.style.display = "none";
    }
}

userEmailElement.addEventListener('keyup', () => relaseButtonSingUp());
userPasswordElement.addEventListener('keyup', () => relaseButtonSingUp());
showPassword.addEventListener('click', () => viewPassword(showPassword));
validateLoginBnt.addEventListener('click', () => validateLogin());
popupCloseElement.addEventListener('click', () => hiddePopup());
