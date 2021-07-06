//Valores
const password = document.querySelector('#password')
const button = document.querySelector('button')

//Info Password
let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%¨&*()-_=+{}<>?/';
let passwordLength = 8;

let passwordValue = '';

//Cria o password
const createPassword = () => {
    passwordValue = '';
    for (let i = 0; i < passwordLength; i++) {
        let number = Math.floor(Math.random() * characters.length);
        passwordValue += characters.substring(number, number + 1);
    }

    password.value = passwordValue;
}

//Evento ao botão
button.addEventListener('click', createPassword);