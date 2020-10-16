class Dog {
    constructor(name = "Korra",
                legs = 4,
                heads = 2,
                gender = "Female",
                breed = "Husky",
                mainCol = "Gray",
                secondCol = "White") {

        this.name = name;
        this.legs = legs;
        this.heads = heads;
        this.gender = gender;
        this.breed = breed;
        this.mainCol = mainCol;
        this.secondCol = secondCol;
    }


}


let dog = {
    name: "Korra",
    legs: 4,
    heads: 2,
    gender: "Female",
    breed: "Husky",
    mainCol: "Gray",
    secondCol: "White",
    speak: function() {
        alert("Woof");
    },
    leaveIt: function(chance = .3) {
        Math.random() >= chance ? alert("Yes. You left it.") : alert("No. You ate the thing I told you to leave.");
    }
};

function displayDog(myDoggy = dog){
    const name = document.getElementById("name");
    const legs = document.getElementById("legs");
    const heads = document.getElementById("heads");
    const gender = document.getElementById("gender");
    const breed = document.getElementById("breed");
    const color = document.getElementById("color");

    name.innerText = myDoggy.name;
    console.log(name.innerHtml);
    legs.innerText = myDoggy.legs;
    console.log(legs.innerText);
    heads.innerText = myDoggy.heads;
    gender.innerText = myDoggy.gender;
    breed.innerText = myDoggy.breed;
    color.append(document.createTextNode(myDoggy.mainCol + " & "));
    color.append(document.createTextNode(myDoggy.secondCol));
}
