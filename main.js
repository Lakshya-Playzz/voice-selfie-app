var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start();
}
recognition.onresult=function(e){
    console.log(e);
    var content = e.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content

    if(content == "take my selfie"){
        speak()
}
}
 var camera = document.getElementById("camera")
 Webcam.set({
     width:400,
     height:350,
     image_format:"png",
     png_quality:100
 })
 Webcam.attach(camera)

 function speak(){
     synth = window.speechSynthesis
     speakdata = "taking selfie in 5 seconds"
    utter_this = new SpeechSynthesisUtterance(speakdata)
     synth.speak(utter_this)
     setTimeout( function()  {
         take_snapshot()
         save()
         
     }, 5000);
 }
 function take_snapshot(){
     Webcam.snap(function(data_url){
         console.log(data_url)
         document.getElementById("result").innerHTML = "<img src='"+data_url+"' id='selfie'>";
     })
 }
 function save(){
     link = document.getElementById("link");
     image = document.getElementById("selfie").src
     link.href=image;
     link.click()
 }
 

