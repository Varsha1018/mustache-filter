noseX=0;
noseY=0;

function preload(){
   clown_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas=createCanvas(400, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 380);
    video.hide();
    poseNet=ml5.poseNet(video,moddelloaded);
    poseNet.on("pose",Gotpose);
    
}

function moddelloaded(){
    console.log("poseNet is loaded");
    }
    function Gotpose(results){
        if(results.length > 0){
            console.log("results");
            noseX=results[0].pose.nose.x -13;
            noseY=results[0].pose.nose.y ;
            console.log("nose_x ="+noseX);
            console.log("nose_y = "+noseY);
        }
    }
    
    

function draw(){
    image(video, 0, 0, 400, 380);
    image(clown_nose, noseX, noseY, 30, 30);
}

function capture(){
    save(mustache_filter.png);
}
