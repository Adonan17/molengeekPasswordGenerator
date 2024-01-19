let yourPassword = document.querySelector('#yourPassword');
let pwLength = document.querySelector('#pwLength');
let pwUpperCase = document.querySelector('#pwUpperCase');
let pwLowerCase = document.querySelector('#pwLowerCase');
let pwNumbers = document.querySelector('#pwNumbers');
let pwSymbols = document.querySelector('#pwSymbols');
let generateBtn = document.querySelector('#generate');

generateBtn.addEventListener('click', () => {
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let symbols = "@%&*_#^!+@%$"
    let password = []
    let passwordResult = []
    let randomIndex

    if (pwUpperCase.checked == true){
        password.push(upperCase)
    }

    if (pwLowerCase.checked == true){
        password.push(lowerCase)
    }

    if (pwNumbers.checked == true){
        password.push(numbers)
    }

    if (pwSymbols.checked == true){
        password.push(symbols)
    }

    for (let i = 0; i < pwLength.value; i++) {
        randomIndex = Math.floor(Math.random() * password.join('').length);
        passwordResult.push(password.join('')[randomIndex]);
    }
    yourPassword.innerHTML = passwordResult.join('')

})

function copy() {
    let copyText = yourPassword.innerHTML;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Copied the text: " + copyText);
        })
}
