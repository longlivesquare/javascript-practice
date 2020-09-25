// This is a single line comment
/* This comment spans
several lines
of code */


function test() {
    countLetters("supercalifragelousexpialedocious");
    displayAnyNum();
}

function countLetters(word) {
    console.log(word.length);
}

function displayAnyNum(){
    num = Math.random();
    console.log(num);
    console.log(typeof(num));
}

function displayBigInt(myBigInt){
    console.log(myBigInt);
    console.log(typeof(myBigInt))
}