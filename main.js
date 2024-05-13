

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
   canvas.mouseReleased(classifyCanvas);
   synth = window.speechSynthesis;
}

function preload() {

    
classifier = ml5.imageClassifier('DoodleNet');
}


function clearCanvas() {

    background("white");
}

function draw() {


    strokeWeight(13);

    stroke(0);

    if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResults(error, result) {
    if (error) {
        console.error(error);
    }
    console.log(results);

    document.getElementById('label').innerHTML = 'Etiqueta: ' + results[0].label;

    document.getElementById('confidence').innerHTML = 'Presición: ' + Math.round(results[0].confidence *100) + '%';

    uttherThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(uttherThis);
}