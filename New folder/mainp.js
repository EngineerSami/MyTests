const myDiv = document.getElementById('loadingScreen');


setTimeout(() => {
  myDiv.remove();
}, 3500);

document.getElementById("test").style.display = 'none';
document.getElementById("test1").style.display = 'none';
document.getElementById("test2").style.display = 'none';
document.getElementById("test3").style.display = 'none';
function divcome() {
  document.getElementById("test").style.display = 'block';
}
function hidediv() {
  document.getElementById("test").style.display = 'none';
}
function divcome1() {
  document.getElementById("test1").style.display = 'block';
}
function hidediv1() {
  document.getElementById("test1").style.display = 'none';
}
function divcome2() {
  document.getElementById("test2").style.display = 'block';
}
function hidediv2() {
  document.getElementById("test2").style.display = 'none';
}
function divcome3() {
  document.getElementById("test3").style.display = 'block';
}
function hidediv3() {
  document.getElementById("test3").style.display = 'none';
}