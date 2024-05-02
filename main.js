function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(450, 400);
    canvas.position(680, 240);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
 } 

function draw() {
    background('#969A97');
 }

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
 }