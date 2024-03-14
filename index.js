function generatepass () {
    let passlength;
    let letLowerCase;
    let letUpperCase;
    let letSymbols;
    let letNumbers;

    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const symbols = "!£$%^&*_+=-?."
    const numbers = "1234567890"

    const error = document.getElementById("error")

    let pass = ""
    let settings = ""

    passlength = document.getElementById("passlength").value

    const uCCheckbox = document.getElementById("Uppercase")
    const lCCheckbox = document.getElementById("Lowercase")
    const numCheckbox = document.getElementById("Number")
    const symCheckbox = document.getElementById("Symbol")

    letLowerCase = lCCheckbox.checked;
    letUpperCase = uCCheckbox.checked;
    letNumbers = numCheckbox.checked;
    letSymbols = symCheckbox.checked;


    settings += letLowerCase ? lowerCaseLetters: ""
    settings += letUpperCase ? upperCaseLetters: ""
    settings += letSymbols ? symbols: ""
    settings += letNumbers ? numbers: ""

    console.log(settings)
    console.log(pass)

    for(let i = 0; i < passlength; i++) {
        const randomL = Math.floor(Math.random() * settings.length)
        pass += settings[randomL]
    }

    if(settings.length == 0) {
        error.classList.remove("visually-hidden")
        error.textContent = "Please check atleast one box."
        setTimeout(() => {
            error.classList.add("visually-hidden")
        }, 3000);
    }

    if(passlength == 0 || passlength == null) {
        error.classList.remove("visually-hidden")
        error.textContent = "Please enter a valid password length."
        setTimeout(() => {
            error.classList.add("visually-hidden")
        }, 3000);
    }

    document.getElementById("passlabel").classList.remove("visually-hidden")
    document.getElementById("pass").textContent = pass
}


document.getElementById("submitbtn").addEventListener("click", function (e) {
    e.preventDefault()
    const pass = generatepass()
})