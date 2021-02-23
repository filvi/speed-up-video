// Speed up EVERY VIDEO in the page
// Open the console CTRL + SHIFT + J in Chrome and paste the content according to your need
var vid = document.querySelectorAll("video");
vid.forEach((v)=>{v.playbackRate = 1})      // reset
vid.forEach((v)=>{v.playbackRate += 0.5})   // aumenta di 0.05
vid.forEach((v)=>{v.playbackRate -= 0.5})   // diminuisce di 0.05
vid.forEach((v)=>{v.playbackRate = 1.5})    // setta a velocita' a 1.5x