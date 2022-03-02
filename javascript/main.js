const title = document.getElementById('title');

let userLogin = JSON.parse(localStorage.getItem('userLogin'))

title.innerHTML = `Olá ${userLogin.userName}`;

if (localStorage.getItem('token') == null) {
    alert("Você precisa estar logado para acessar esta página!");
    window.location.href = './index.html';
}

function logout () {

    localStorage.removeItem('token');
    localStorage.removeItem('userLogin');

    setTimeout(() => {
        window.location.href = './index.html';
    }, 2000);
}