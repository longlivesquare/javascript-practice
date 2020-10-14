const re = /^[A-z]{1}.{5,19}$/;
const A = 65;
const z = 122;

function verifyPWRegEx(pw, regex=re) {
    console.log(pw);
    let ok = regex.exec(pw);
    if(!ok) {
        console.log("Invalid password");
    } else {
        console.log("Password looks a-ok");
    }
}

function verifyPW(pw) {
    function checkLetter(pw) {
        return pw.charCodeAt(0) >= A && pw.charCodeAt(0) <=z;
    }
    function checkLength(pw, min=6, max=20) {
        return pw.length >= min && pw.length <= max;
    }
    let error = document.getElementById("error")
    error.innerHTML = "";
    if (!checkLength(pw)) {
        error.innerHTML += "Password must be between 6 and 20 characters<br>"
    } else if(!checkLetter(pw)) {
        error.innerHTML = "Password must start with a letter";
    } else {
        console.log("Password satisfies the parameters.");
    }
}

function evenOdd(num) {
    if (num%2) {
        console.log(num + " is odd");
    } else {
        console.log(num + " is even");
    }
}