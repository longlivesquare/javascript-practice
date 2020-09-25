// This is a single line comment
/* This comment spans
several lines
of code */


function test() {
    countLetters("supercalifragelousexpialedocious");
    displayAnyNum();
    displayBigInt(54642165416815361651684231651813216548168816216518168151n);
}

function countLetters(word) {
    console.log(word.length);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function displayAnyNum(){
    num = getRndInteger(1,2**30);
    console.log(num);
    console.log(typeof num);
}

function displayBigInt(myBigInt){
    console.log(myBigInt);
    console.log(typeof myBigInt);
}