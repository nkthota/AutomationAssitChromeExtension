(function() {

function listen() {
  var reloadButton = document.querySelector('.reload-button');
  reloadButton.addEventListener('click', demoPreprocessor);
}
window.addEventListener('load', listen);

function demoPreprocessor() {
 alert('naveen');
}

})();
