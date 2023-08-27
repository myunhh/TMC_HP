<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    var audiofile = window.audiofile
    
    const audioElement = document.getElementById("audioSrc");
    const audioFile = audiofile;
    
    audioElement.querySelector("source").src = audioFile;
    audioElement.load();
    audioElement.play();
=======
document.addEventListener("DOMContentLoaded", function() {
    var audiofile = window.audiofile
    
    const audioElement = document.getElementById("audioSrc");
    const audioFile = audiofile;
    
    audioElement.querySelector("source").src = audioFile;
    audioElement.load();
    audioElement.play();
>>>>>>> 9c3e3af12d9937c71028f50317052b42a9697913
});