img="";
status_of_the_cocossd_model=""
function Back(){
    window.location="index.html"
}

function preload(){
    img= loadImage("plant.webp")
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();

    }
function draw(){
    image(img,0,0,500,500)
    }

    

function modelLoaded(){
    console.log("Model Loaded!")
    status_of_the_cocossd_model = true;
    objectDetector.detect(img, gotResults);
    
    }
function gotResults(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
    objects = results;
    }