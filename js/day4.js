let x = NaN;
let y = NaN;

while(isNaN(x)) {
  x = parseInt(prompt("Enter a number"));
  if (isNaN(x)) {
    alert("Not a number. Try again")
  }
}

while(isNaN(y)) {
  y = parseInt(prompt("Enter another number"))
  if(isNaN(y)) {
    alert("Not a number. Try again");''
  }
}

x > y ? alert(x + " is greater") : x < y ? alert(y + " is greater") : alert("They are equal");