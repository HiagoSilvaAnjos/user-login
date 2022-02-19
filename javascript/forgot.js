const inputEmailElement = document.querySelector("#email");
const buttonForgut = document.querySelector(".button-forgot");
const mensageErrorElement = document.querySelector("#mensagem-error");

buttonForgut.addEventListener("click", () => {
    
    let validateEmail = /\S+@\S+\.\S+/;
    let yourEmail = validateEmail.test(inputEmailElement.value);

    if (yourEmail) {
        alert("tudo certo");
    } else {
        mensageError();
    }

})

const mensageError = () => {
    mensageErrorElement.style.display = "inline-block";

    setTimeout(hiddeError, 5000);

    function hiddeError () {
        mensageErrorElement.style.display = "none";
    }
}