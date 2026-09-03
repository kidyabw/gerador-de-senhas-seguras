const btnEl = document.querySelector(".btn");

const inputEl = document.getElementById("input");

const btnEl1 = document.querySelector(".btn1");

const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", ()=>{
    createPassword();
})

btnEl1.addEventListener("click", ()=>{
    copyPassword();
    if(inputEl.value) {
        alertEl.classList.remove("active");
        setTimeout(()=>{
        alertEl.classList.add("active");
        }, 2000)
    }
    
})

function createPassword(){
    const ch = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()\/";

    const passwordlengh = 14;

    let password = ""

    for (let index = 0; index < passwordlengh; index++) {
        const randomNum = Math.floor(Math.random() * ch.length)
        password += ch.substring(randomNum, randomNum + 1);       
    }

    inputEl.value = password;
    alertEl.innerText = password + " copiado"
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value)

    
}