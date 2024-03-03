const name = document.querySelector("#fname");
const greetMeButton = document.querySelector(".userData");
const greetingOutput = document.querySelector(".greeting");

greetMeButton.addEventListener('click', (event) => {
   greetingOutput.innerText = `Hello ${name.value}`;
})