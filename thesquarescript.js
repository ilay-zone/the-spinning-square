var t = 0
var pxcc = 0
var pressed = false;
var imageInput = document.getElementById('imageInput');
var rotem = document.getElementById("r")
var own = document.getElementById("own")
var creep = document.getElementById("c")
var ender = document.getElementById("e")
var mario = document.getElementById("m")
var pit = document.getElementById("gh")
var pig = document.getElementById("hg")
var rangerr = document.getElementById("rang")
var timespent = document.getElementById("pods")
var px = document.getElementById("px")
var present = document.getElementById("low")
var left = 2.95 - timer
left = -10
var ranger = document.getElementById("veger")
var timerr = 0
var p = document.getElementById("pa")
var musicc = document.getElementById("pit")
var divv = document.getElementById("pov")
//var div = document.getElementsByTagName("div")
//div.style.left = screen.width / 2
var timer = 0
var pitx = document.getElementById("pity")
var body = document.getElementById("pitxx")
var pd = 0
var checs = document.getElementById("pd")
var nochecs = document.getElementById("pid")
var god = document.querySelector('#hello');
var audurl = ""
var au = document.getElementById('au');
var pies = document.getElementById('pos');
au.addEventListener('change', auy); 
function auy(event) {
var aag = event.target.files[0];

const reader = new FileReader();
reader.onload = function(event) {
    audurl = event.target.result;
    pies.src = audurl;
}
reader.readAsDataURL(aag);
}
function getOrSetVariable(variable) {
    // Check if the variable is already in localStorage
    const savedValue = localStorage.getItem(variable);

    if (savedValue !== null) {
        // If set, return the stored value
        return parseInt(savedValue, 10); // Assuming it's an integer; adjust as needed
    } else {
        // If not set, set it to 0 in localStorage and return the value
        localStorage.setItem(variable, '0');
        return 0;
    }
}
function setVariable(variable, value) {
    // Set the variable to the provided value in localStorage
    localStorage.setItem(variable, value.toString());
}


divv.src = "https://www.dropbox.com/s/nvcslw815ge97um/Screenshot_2023-02-06-11-03-54-240_no.mobitroll.kahoot.android-edit.jpg?dl=0"
var secs =  getOrSetVariable('secs');
var ter = 0
var imageDataUrl = ""
function pie() {
    setVariable('secs', 0);
    secs = 0
}
imageInput.addEventListener('change', handleImageSelect); 
        function handleImageSelect(event) {
const selectedImageFile = event.target.files[0];

const reader = new FileReader();
reader.onload = function(event) {
    imageDataUrl = event.target.result;
    if (own.checked==true) {
    divv.style.backgroundImage = `url(${imageDataUrl})`;
    }
}
reader.readAsDataURL(selectedImageFile);
}
p.innerHTML =  "click the square!"
console.log("variable's loaded")
function time() {
    if (pd!==1) {
    if (pd==0) {
    pitx.setAttribute("value", "#fefeff");
    ranger.setAttribute("value", "50")  
    rangerr.setAttribute("value", "50");
    console.log("input's value loaded")
    }
    if (pd==2) {
        ranger.setAttribute("value", "50");
    }
    if (pd==3) {
        rangerr.setAttribute("value", "50");
    }
    pd = 1
    }
    if (checs.checked==true) {
        body.classList.add("pf");
    var np = rangerr.value * 10 / 100
    body.style.animationDuration = np + "s"
    }
    else {
    body.classList.remove("pf");
    body.style.backgroundColor = pitx.value
    }
    if (nochecs.checked==true) {
        divv.classList.add("ball");
        divv.classList.remove("square");
    }
    else {
    divv.classList.remove("ball");
    divv.classList.add("square");
    }
    if (divv.id=="hello") {
    var element = document.querySelector('.spin'); 
    var n = ranger.value * 16 / 100
    element.style.animationDuration = n + "s"
    }
    else {
        divv.style.animationDuration = "1s"
    }
    present.innerHTML = ranger.value * 2 + "%  ";
    px.innerHTML = rangerr.value * 2 + "%  ";
    /*if (divv.classList.contain("secret")) {
        divv.classList.remove("pit");
        divv.classList.remove("pig");
        divv.classList.remove("rotem");
        divv.classList.remove("mario");
        divv.classList.remove("ender");
        divv.classList.remove("creep")
        divv.style.backgroundImage = ""
    }
    else*/ if (pit.checked==true) {
        divv.classList.add("pit");
        divv.classList.remove("pig");
        divv.classList.remove("rotem");
        divv.classList.remove("mario");
        divv.classList.remove("ender");
        divv.classList.remove("creep")
        divv.style.backgroundImage = ""
    }
    else if (pig.checked==true) {
        divv.classList.add("pig");
        divv.classList.remove("rotem");
        divv.classList.remove("mario");
        divv.classList.remove("pit");
        divv.classList.remove("ender");
        divv.classList.remove("creep")
        divv.style.backgroundImage = ""
    }
    else if (mario.checked==true) {
        divv.classList.add("mario");
        divv.classList.remove("rotem");
        divv.classList.remove("pig");
        divv.classList.remove("pit");
        divv.classList.remove("ender");
        divv.classList.remove("creep")
        divv.style.backgroundImage = ""
    }
    else if (rotem.checked==true) {
        divv.classList.add("rotem");
        divv.classList.remove("pig");
        divv.classList.remove("pit");
        divv.classList.remove("mario");
        divv.classList.remove("ender");
        divv.style.backgroundImage = ""
        divv.classList.remove("creep")
    }
    else if (ender.checked==true) {
        divv.classList.add("ender")
        divv.classList.remove("rotem");
        divv.classList.remove("pig");
        divv.classList.remove("pit");
        divv.classList.remove("mario");
        divv.classList.remove("creep")
    divv.style.backgroundImage = "" 
    }
    else if (creep.checked==true) {
        divv.classList.add("creep")
        divv.classList.remove("ender")
        divv.classList.remove("rotem");
        divv.classList.remove("pig");
        divv.classList.remove("pit");
        divv.classList.remove("mario");
        divv.style.backgroundImage = ""
    }
    else if (own.checked==true) {
    divv.style.backgroundImage = `url(${imageDataUrl})`;
    divv.classList.remove("pig");
    divv.classList.remove("pit");
    divv.classList.remove("mario"); 
    divv.classList.remove("rotem");   
    divv.classList.remove("ender");
    divv.classList.remove("creep");
    }
    else {
    divv.style.backgroundImage = ""
    divv.classList.remove("pig");
    divv.classList.remove("pit");
    divv.classList.remove("mario"); 
    divv.classList.remove("rotem");   
    divv.classList.remove("ender");
    divv.classList.remove("creep");
    divv.style.backgroundImage = "";
    }
    
    if (divv.id=="hello") {
        secs += 0.01
        timespent.innerHTML = "the square has spinned for: " + Math.floor(secs/60) + " minutes, " + Math.floor(secs)%60 + "'s"
    }
    else {
        timespent.innerHTML = "the square is not rotating (" + Math.floor(secs/60) + " minutes, " + Math.floor(secs)%60 + "'s)"
    }
    if (Math.floor(secs)!==0) {
    if (Math.floor(secs)%60==0) {
        window.navigator.vibrate(500);
        if (t==0) {
        alert("you passed the: " + Math.floor(secs)/60 + " minutes mark")
        t = 1
    }
    }
    else {
        t = 0
    }
    }
    timer += 0.01
    left = Math.ceil(2.950 - timer)
    left = -10
    if (left<=0&&divv.id=="pov") {
        if (divv.classList.contains("square")==true) {
            pa.innerHTML = "click the square!"
        }
        else {
            pa.innerHTML = "click the circle!"
        }
    }
    else if (divv.id=="pov") {
        p.innerHTML = "click the square!"
    }
    else {
        p.innerHTML = ""
    }
}
var update = setInterval(time, 10)
function bo() {
    musicc.pause()
    musicc.currentTime = 0;
    ter =0
    if (divv.id=="hello"&&divv.classList.contains("ball")==false) {
    divv.id = "pi"
    }
    setTimeout(ss, 1000)
}
function ss() {
    divv.id = "pov"
    divv.classList.remove("spin");
    console.log("square stops to spin")
}
function change() {
pressed = !pressed
if (divv.id=="pov") {  
    if (mario.checked==true) {
        pxcc = 1
        musicc.src = "music/mario.mp3"
        musicc.type = "audio/mpeg"
    }
    else if (pxcc==1){
        musicc.src = "music/Otherside.mp3"
        musicc.type = "audio/mpeg"
        pxcc = 0
    }
}
if (pressed) {
    p.innerHTML = ""
    divv.id = "hello"
    divv.classList.add("spin");
    console.log("square is spining")
    musicc.play()
    console.log("music starting")
}
else {
    setVariable('secs', secs);
    p.innerHTML = "click the square!"
    musicc.pause()
    musicc.currentTime = 0;
    ter =0
    if (divv.id=="hello"&&divv.classList.contains("ball")==false) {
    divv.id = "pi"
    }
    setTimeout(ss, 1000)
}
}
function ran(h) {
    pd = 2
    ranger.value = 50
}
function rran(a) {
    pd = 3
    rangerr.value = 50
}

/*// more documentation available at
    // https://github.com/tensorflow/tfjs-models/tree/master/speech-commands

    // the link to your model provided by Teachable Machine export panel
    const URL = "./my_model/";

    async function createModel() {
        const checkpointURL = URL + "model.json"; // model topology
        const metadataURL = URL + "metadata.json"; // model metadata

        const recognizer = speechCommands.create(
            "BROWSER_FFT", // fourier transform type, not useful to change
            undefined, // speech commands vocabulary feature, not useful for your models
            checkpointURL,
            metadataURL);

        // check that model and metadata are loaded via HTTPS requests.
        await recognizer.ensureModelLoaded();

        return recognizer;
    }

    async function init() {
        const recognizer = await createModel();
        const classLabels = recognizer.wordLabels(); // get class labels
        const labelContainer = document.getElementById("label-container");
        for (let i = 0; i < classLabels.length; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }

        // listen() takes two arguments:
        // 1. A callback function that is invoked anytime a word is recognized.
        // 2. A configuration object with adjustable fields
        recognizer.listen(result => {
            const scores = result.scores; // probability of prediction for each class
            // render the probability scores per class
            for (let i = 0; i < classLabels.length; i++) {
                const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
                labelContainer.childNodes[i].innerHTML = classPrediction;
                if (classLabels[i] == "secret" && result.scores[i] >= 50) {
                    div.classlist.add("secret")
                }
            }
        }, {
            includeSpectrogram: true, // in case listen should return result.spectrogram
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
        });

        // Stop the recognition in 5 seconds.
        // setTimeout(() => recognizer.stopListening(), 5000);
    }*/
//window.onload = function() {
//}
