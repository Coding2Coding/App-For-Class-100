var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

function start() {
    document.getElementById("text").innerHTML="";
    recognition.start();
}

recognition.onresult = function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text").innerHTML = content;
    
    if(content == "take my selfie") {
        speech();
    }

}

function speech() {
    var synth = window.speechSynthesis;
    var data = "Taking your selfie in 7 seconds";
    var say = new SpeechSynthesisUtterance(data);
    synth.speak(say);
    Webcam.attach(camera);
    setTimeout(function () {
        takePicture();
        download();
    }, 7000);
}

function download() {
    var downloadedImage = document.getElementById("linkToImage");
    var image = document.getElementById("selfieImage").src;
    downloadedImage.href = image;
    downloadedImage.click();
}

function takePicture() {
    Webcam.snap(function (img) {
        document.getElementById("resultImage").innerHTML = "<img id = 'selfieImage' src = '" + img + "'>";
    });
}
Webcam.set({
    width: 360, 
    height: 250, 
    image_format: 'png', 
    png_quality: 90
});

var camera = document.getElementById("camera");