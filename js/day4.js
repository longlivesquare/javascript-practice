function promptForNumber() {
    let x = NaN;
    while(isNaN(x)) {
        x = parseInt(prompt("Enter a number"));
        if (isNaN(x)) {
          alert("Not a number. Try again")
        }
      }
      x = Math.max(-100, x);
      x = Math.min(100, x);
      return x
}

let x = promptForNumber();
let y = promptForNumber();

x > y ? alert(x + " is greater") : x < y ? alert(y + " is greater") : alert("They are equal");