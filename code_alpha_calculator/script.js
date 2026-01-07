const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.innerText);
    });
});

function handleInput(value) {
    if (value === "C") {
        currentInput = "";
        display.value = "";
    } 
    else if (value === "=") {
        try {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
        } catch {
            display.value = "Error";
            currentInput = "";
        }
    } 
    else {
        currentInput += value;
        display.value = currentInput;
    }
}

/* 🎹 Keyboard Support */
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if ("0123456789+-*/.".includes(key)) {
        handleInput(key);
    } 
    else if (key === "Enter") {
        handleInput("=");
    } 
    else if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } 
    else if (key === "Escape") {
        handleInput("C");
    }
});
