document.addEventListener("DOMContentLoaded", function() {
    var audiofile = window.audiofile
    
    const audioElement = document.getElementById("audioSrc");
    const audioFile = audiofile;
    
    audioElement.querySelector("source").src = audioFile;
    audioElement.load();
    audioElement.play();
});