let firstResult = document.getElementById("password-gen__result-one");
let secondResult = document.getElementById("password-gen__result-two");
let generatePassword = document.querySelector(".password-gen__button");
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

generatePassword.addEventListener("click", function() {
    firstResult.textContent = "";
    secondResult.textContent = "";
    for (let i = 0; i < 16; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length);
        let randomIndex2 = Math.floor(Math.random() * characters.length);

        firstResult.textContent += characters[randomIndex1];
        secondResult.textContent += characters[randomIndex2];
    }
});
