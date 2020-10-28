const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/gm;
function validatePW(pattern = re) {
    let pwField = document.getElementById("pw");
    var OK = pattern.test(pwField.value);
    let message = document.getElementById("message");
    message.innerHTML = "";
    if (!OK) {
        console.log("Bad password");
        message.appendChild(document.createTextNode("Password must contain at least 1 upper case, 1 lower case and 1 numeral. It must be between 6 and 20 characters."));
        message.className = "error";
    } else {
        console.log("Good password.");
        message.appendChild(document.createTextNode("Valid Password."))
        message.className = "";
    }
}