const passwordBox = document.getElementById("Password");
const copyBtn = document.getElementById("copyBtn");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = " @#$%^&*()_+{}[]";
const allChar = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password; // Set the generated password in the input field
}

function copyPassword() {
    const password = passwordBox.value; // Get the password from the input field

    if (password) {
        navigator.clipboard.writeText(password) // Use Clipboard API
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy password:", err);
                alert("Failed to copy password.");
            });
    } else {
        alert("No password to copy!");
    }
}

// Attach the click event to the copy button
copyBtn.addEventListener("click", copyPassword);