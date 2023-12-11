// let sizeJohn = 170;
// let sizeMeike = 168;
// let ageJohn = 22;
// let ageMeike = 34;

// function math(age, size) {
//     let score = age * 5 + size
// }

// math(ageJohn, sizeJohn)

let scoreJohn = 0;
let scoreMeike = 0;

function scoreJohnCalc() {
    const sizeJohn = 170;
    const ageJohn = 22;
    scoreJohn = ageJohn * 5 + sizeJohn
    console.log(scoreJohn);
}

scoreJohnCalc()

function scoreMeikeCalc() {
    const sizeMeike = 168;
    const ageMeike = 34;
    scoreMeike = ageMeike * 5 + sizeMeike
    console.log(scoreMeike);
}

scoreMeikeCalc()

function comparison() {
    if (scoreJohn < scoreMeike) {
        console.log("Meike wins");
    } else if (scoreJohn > scoreMeike) {
        console.log("John wins");
    } else {
        console.log("draw");
    }
}

comparison()


