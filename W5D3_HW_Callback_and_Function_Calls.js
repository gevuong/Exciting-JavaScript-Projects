var timeout;

function delayedAlert() {
  timeout = window.setTimeout(setAlert, 5000);
}
// function to be executed after time expires
function setAlert() {
  alert('HAMMERTIME');
}
