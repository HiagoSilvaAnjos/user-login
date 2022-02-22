const userEmailElement = document.querySelector('#email');
const userNameElement = document.querySelector('#name');
const userPasswordElement = document.querySelector('#password');
const userConfirmPassword = document.querySelector('#confirm-password');
const iconShowPassword = document.querySelector('#icon-hide');
const iconShowPasswordConfirm = document.querySelector('#icon-hide-password-confirm');
const bntSubmitSignup = document.querySelector('#bnt-submit-signup');

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

// Validar os dados do usuário
const validateUserdata = () => {
    alert('Funcionalidade em construção...')
}

iconShowPassword.addEventListener('click', () => showPassword(iconShowPassword));
iconShowPasswordConfirm.addEventListener('click', () => showPasswordConfirm(iconShowPasswordConfirm));
bntSubmitSignup.addEventListener('click', () => validateUserdata());