//https://teachablemachine.withgoogle.com/models/stGgL3EMA/
Webcam.set({
    width:350,
    height:300,
    img_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach(" #camera ");
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'/>";
    });
}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/stGgL3EMA/model.json',modelLoaded);
function modelLoaded() { 
    console.log('Model Loaded!'); 
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
// function gotResult(){
//     if(error){
//         console.error(error);
//     } else{
//         console.log(results);
//         document.getElementById("result_object_name").innerHTML = results[0].label;
//         document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
//     }
// }
function gotResult(error, results) { 
    // Display error in the console 
    if (error) { 
        console.error(error); 
    } else { 
        // The results are in an array ordered by confidence. 
        console.log(results); 
        document.getElementById("result_object_name").innerHTML = results[0].label; 
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3); 
    }
 }