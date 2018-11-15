const { ipcRenderer } = require('electron')

console.log("I'm working");

let aboutButton = document.querySelector('#about-app');

aboutButton.addEventListener('click', function() {
  ipcRenderer.send('open-about-app');
});