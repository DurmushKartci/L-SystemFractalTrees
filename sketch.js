var axiom = "A";
var sentence = axiom;

var rule = [];

rule[0] = {
    a: "A",
    b: "AB"
}

rule[1] = {
    a: "B",
    b: "A"
}

function generate() {
    var nextSentence = "";
    for (var i of sentence.length) {
        var current = sentence.charAt(i);
        if (current == rule[0].a) {
            nextSentence += rule[0].b;
        } else if (current == rule[1].a) {
            nextSentence += rule[1].b;
        } else {
            nextSentence += current;
        }

    }
    sentence = nextSentence;
    createP(sentence);
}

function setup() {
    noCanvas();
    // createCanvas(500, 500);
    createP(axiom);
    let button = createButton("Generate");
    button.mousePressed(generate);
}

// function draw() {
//     background(51);
// }