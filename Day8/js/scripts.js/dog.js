let dog = {
    name: "Korra",
    legs: 4,
    heads: 2,
    mainCol: "Gray",
    secondCol: "White",
    speak: function() {
        alert("Woof");
    },
    leaveIt: function(chance = .3) {
        Math.random() >= chance ? alert("Yes. You left it.") : alert("No. You ate the thing I told you to leave.");
    }
};