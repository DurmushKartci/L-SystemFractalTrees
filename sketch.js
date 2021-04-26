var axiom = "F";
var sentence = axiom;
let angle;
var len = 100;
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
    turtle();
}

function turtle() {
    len *= 0.55;
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        if (current == "F") {
            line(0, 0, 0, -len);
            translate(0, -len)
        } else if (current == "+") {
            rotate(angle);
        } else if (current == "-") {
            rotate(-angle);
        } else if (current == "[") {
            push();
        } else if (current == "]") {
            pop();
        }
    }
}

function setup() {
    angle = radians(25);
    createCanvas(500, 500);
    background(51);
    translate(width / 2, height);
    stroke(255, 100);
    turtle();
    createP(axiom);
    let button = createButton("Generate");
    button.mousePressed(generate);
}