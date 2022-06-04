function preload()
{

}

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotPoses);
}
function modelloaded(){
    console.log("PoseNet is initialized");

}   
function gotPoses()
{

}
function draw()
{
     image(video,0,0,300,300)
}