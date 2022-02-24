const inputEmailElement = document.querySelector("#email");
const buttonForgut = document.querySelector(".button-forgot");
const mensageErrorElement = document.querySelector("#mensagem-error");
const popupElement = document.querySelector('.popup');
const popupCloseElement = document.querySelector('.popup-close');

/* mudar a cor do iconi enquanto o input email estiver focado e remove-la quando perder o foco */
inputEmailElement.addEventListener("focus", () => changeIconColorEmail());
inputEmailElement.addEventListener("blur", () => removeChangeIconColorEmail());

const changeIconColorEmail = () => {
    const iconElement = document.getElementById('icon-email');
    iconElement.style.color = "#7c58da";
}

// Remover cor do iconi
const removeChangeIconColorEmail = () => {
    const iconElement = document.getElementById('icon-email');
    iconElement.style.color = "#3b3939ce";
}

popupCloseElement.addEventListener('click', () => hiddePopup());
buttonForgut.addEventListener("click", () => {
    
    let validateEmail = /\S+@\S+\.\S+/;
    let yourEmail = validateEmail.test(inputEmailElement.value);

    if (yourEmail) {
        showPopup();
        mensageErrorElement.style.display = "none";
    } else {
        mensageError();
    }

})

// mostrar mensagem de error
const mensageError = () => {
    mensageErrorElement.style.display = "inline-block";

    setTimeout(hiddeError, 5000);

    function hiddeError () {
        mensageErrorElement.style.display = "none";
    }
}

// Mostrar popup e fechar popup
const showPopup = () => {
    popupElement.style.display = 'block';

    setTimeout(hiddePopup, 5000);

}

const hiddePopup = () => {
    popupElement.style.display = 'none';
}