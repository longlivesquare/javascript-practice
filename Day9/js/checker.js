function verifyPhone(phone) {
    let re = /(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/;

    var OK = re.exec(phone.value);
    if (!OK) {
        console.error(phone.value + " isn't a phone number");
    } else {
        console.log("Valid phone number")
    }
}

var user = {fname:"", lname:"",phone:"",email:""};

function getInfo() {
    user.fname = document.forms["myform"]["fName"].value;
    user.lname = document.getElementById("lName").value;
    let phone = document.getElementById("phone");
    verifyPhone(phone);
    user.phone = phone;
    user.email = document.getElementById("email");
}

function toggleHide() {
    let myform = document.forms["myform"];

    myform.style.visibility = (myform.style.visibility == "visible" ? "hidden" : "visible");
}

function showInfo() {

}