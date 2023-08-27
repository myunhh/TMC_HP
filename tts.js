var _tts_speech_mode = 0;
var SpeechText = function(langCd, idToSpeak, idButton) {
  this.isSpeakable = ('speechSynthesis' in window);
  this.lang        = langCd;
  this.txtblock    = $(idToSpeak).text();
  this.button      = idButton;
  this.msg         = null;

  this.init = function() {
    this.msg       = (this.isSpeakable) ? new SpeechSynthesisUtterance() : null;
    this.msg.lang  = (this.lang)? this.lang : "ko-KR";
    this.msg.pitch = 0.8;
    this.msg.rate  = 0.9;
    this.msg.text  = this.txtblock;
    this.msg.onend = function() {
      console.log("end");
      _tts_speech_mode = 0;
    }
  }

  window.onbeforeunload = function () {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    // return false;
  };

  this.showVoice = function() {
    console.log((this.isSpeakable)?window.speechSynthesis.getVoices():"없다요");
  };
  this.speak = function() {
    if (this.msg==null) this.init();
    if (this.isSpeakable && this.msg.text!="") {
      console.log("start");
      window.speechSynthesis.speak(this.msg);
      _tts_speech_mode = 1;
    }
  };
  this.resume = function() {
    window.speechSynthesis.resume();
    _tts_speech_mode = 1;
  };
  this.pause = function() {
    window.speechSynthesis.pause();
    _tts_speech_mode = 2;
  };
  this.stop = function() {
    window.speechSynthesis.cancel();
    _tts_speech_mode = 0;
  };
  this.toggle = function() {
    console.log(_tts_speech_mode);
    if (this.isSpeakable) {
      if (_tts_speech_mode==1) this.pause();
      else if (_tts_speech_mode==2) this.resume();
      else {
        this.stop();
        this.speak();
      }
    } else console.log("this device is not support tts.");
  }
}