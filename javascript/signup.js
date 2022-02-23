const userEmailElement = document.querySelector('#email');
const userNameElement = document.querySelector('#name');
const userPasswordElement = document.querySelector('#password');
const userConfirmPassword = document.querySelector('#confirm-password');
const iconShowPassword = document.querySelector('#icon-hide');
const iconShowPasswordConfirm = document.querySelector('#icon-hide-password-confirm');
const bntSubmitSignup = document.querySelector('#bnt-submit-signup');
// span
const messageErrorEmail = document.querySelector('#mensagem-error-email');
const messageErrorName = document.querySelector('#mensagem-error-name');
const messageErrorPassword = document.querySelector('#mensagem-error-password');
const messageErrorConfirmPassword = document.querySelector('#mensagem-error-confirm-password');
const allSpans = document.getElementsByClassName('spans-error');

// Saber se os inputs estão vazios
let validateEmail = () => userEmailElement.value.trim().length > 0;
let validNameUser = () => userNameElement.value.trim().length > 0;
let validPassword = () => userPasswordElement.value.trim().length > 0;
let validConfirmPassword = () => userConfirmPassword.value.trim().length > 0;

// Validar os dados do usuário
const validateUserdata = () => {
    const email = validateEmail();
    const userName = validNameUser();
    const password = validPassword();
    const confirmedPassword = validConfirmPassword();
    const inputs = validateEmail() || validNameUser() || validPassword() || validConfirmPassword();

    if (!inputs) {
        return inValidInputs()
    } 

    if (!email) {
        return inValidEmail()
    } 

    if (!userName) {
        return inValidName()
    }

    if (!password) {
        return inValidPassword()
    }

    if (!confirmedPassword) {
        return inValidConfirmPassword()
    }

    alert('Cadastrado com sucesso')
    
}

// Todos os inputs vazios...
const inValidInputs = () => {

    for (i of allSpans) {
        i.style.display = 'inline-block';
    }

    messageErrorEmail.innerText = 'E-mail é obrigatório';
    messageErrorName.innerText = 'Nome é obrigatório';
    messageErrorPassword.innerText = 'Senha é obrigatório';
    messageErrorConfirmPassword.innerText = 'Confirmação de senha é obrigatório';

    // sumir mensagem de error
    setTimeout(function() {
        for (i of allSpans) {
            i.style.display = 'none';
        }
    }, 5000)
}

// input email vazio
const inValidEmail = () => {
    messageErrorEmail.style.display = "inline-block"
    messageErrorEmail.innerText = 'E-mail é obrigatório';
}

// input nome vazio
const inValidName = () => {
    messageErrorName.style.display = "inline-block"
    messageErrorName.innerText = 'Nome é obrigatório';
}

// input password vazio
const inValidPassword = () => {
    messageErrorPassword.style.display = "inline-block"
    messageErrorPassword.innerText = 'Senha é obrigatório';
}

// input comfirmar password vazio
const inValidConfirmPassword = () => {
    messageErrorConfirmPassword.style.display = "inline-block"
    messageErrorConfirmPassword.innerText = 'Confirmação de senha é obrigatório';
}

// Adicionar cor ao iconi dos inputs

// input email
const changeIconColorEmail = () => {
    const iconEmail = document.querySelector('.bxs-envelope');
    iconEmail.style.color = "#7c58da";
}

// input name
const changeIconColorName = () => {
    const iconUser = document.querySelector('.bxs-user');
    iconUser.style.color = "#7c58da";
}

// input password
const changeIconColorPassword = () => {
    const iconLock = document.querySelector('.bxs-lock-alt');
    iconLock.style.color = "#7c58da";
}

// input confirm password
const changeIconColorConfirmPassword = () => {
    const iconLock = document.querySelector('#icon-lock-password-confirm');
    iconLock.style.color = "#7c58da";
}

userEmailElement.addEventListener('focus', () => changeIconColorEmail());
userNameElement.addEventListener('focus', () => changeIconColorName());
userPasswordElement.addEventListener('focus', () => changeIconColorPassword());
userConfirmPassword.addEventListener('focus', () => changeIconColorConfirmPassword());

// remover erros dos inputs
userEmailElement.addEventListener('change', () => removeTextErrorInput(messageErrorEmail));
userNameElement.addEventListener('change', () => removeTextErrorInput(messageErrorName));
userPasswordElement.addEventListener('change', () => removeTextErrorInput(messageErrorPassword));
userConfirmPassword.addEventListener('change', () => removeTextErrorInput(messageErrorConfirmPassword));

const removeTextErrorInput = (spanElement) => {
    spanElement.style.display = "none";
}

// Remover cor dos iconis dos inputs

// input email
const removeColorIconEmail = () => {
    const iconEmail = document.querySelector('.bxs-envelope');
    iconEmail.style.color = "#3b3939ce";
}

// input name
const removeColorIconName = () => {
    const iconUser = document.querySelector('.bxs-user');
    iconUser.style.color = "#3b3939ce";
}

// input password
const removeColorIconPassword = () => {
    const iconLock = document.querySelector('.bxs-lock-alt');
    iconLock.style.color = "#3b3939ce";
}

// input confirm password
const removeColorIconConfirmPassword = () => {
    const iconLock = document.querySelector('#icon-lock-password-confirm');
    iconLock.style.color = "#3b3939ce";
}

userEmailElement.addEventListener('blur', () => removeColorIconEmail());
userNameElement.addEventListener('blur', () => removeColorIconName());
userPasswordElement.addEventListener('blur', () => removeColorIconPassword());
userConfirmPassword.addEventListener('blur', () => removeColorIconConfirmPassword());

/*
Mostrar senha e não mostrar senha
*/

// input password
let turn = true;
const showPassword = (iconShowPassword) => {

    if (turn) {
        userPasswordElement.removeAttribute('type');
        userPasswordElement.setAttribute('type', 'text');
        iconShowPassword.removeAttribute('class');
        iconShowPassword.setAttribute('class', 'bx bxs-hide');
        turn = false;
    } else {
        userPasswordElement.removeAttribute('type', 'text');
        userPasswordElement.setAttribute('type', 'password');
        iconShowPassword.removeAttribute('class');
        iconShowPassword.setAttribute('class', 'bx bxs-show');
        turn = true;
    }


}

// input confirm password
let turnInputConfirm = true;
const showPasswordConfirm = (iconShowPasswordConfirm) => {

    if (turnInputConfirm) {
        userConfirmPassword.removeAttribute('type');
        userConfirmPassword.setAttribute('type', 'text');
        iconShowPasswordConfirm.removeAttribute('class');
        iconShowPasswordConfirm.setAttribute('class', 'bx bxs-hide');
        turnInputConfirm = false;
    } else {
        userConfirmPassword.removeAttribute('type', 'text');
        userConfirmPassword.setAttribute('type', 'password');
        iconShowPasswordConfirm.removeAttribute('class');
        iconShowPasswordConfirm.setAttribute('class', 'bx bxs-show');
        turnInputConfirm = true;
    }

}

iconShowPassword.addEventListener('click', () => showPassword(iconShowPassword));
iconShowPasswordConfirm.addEventListener('click', () => showPasswordConfirm(iconShowPasswordConfirm));
bntSubmitSignup.addEventListener('click', () => validateUserdata());