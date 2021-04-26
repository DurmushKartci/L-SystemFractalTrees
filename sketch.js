var axiom = "F";
var sentence = axiom;

var rule = [];

rule[0] = {
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate() {
    var nextSentence = "";
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var found = false;
        for (var j = 0; j < rule.length; j++) {
            if (current == rule[j].a) {
                found = true;
                nextSentence += rule[j].b;
            }
        }
        if (!found) {
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