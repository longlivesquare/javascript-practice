const re = /^[A-z]{1}.{5,19}$/;
const A = 65;
const z = 122;

function verifyPWRegEx(pw, regex=re) {
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

    if (!checkLength(pw)) {
        console.error("Paswword must have at least 6 characters and no more than 20");
    } else if(!checkLetter(pw)) {
        console.error("Password must start witha letter");
    } else {
        console.log("Password satisfies the parameters.");
    }
}