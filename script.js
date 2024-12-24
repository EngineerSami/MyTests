console.log("page loaded...");

const video = document.getElementById('vid');


video.addEventListener('mouseover', function() {
    video.play(); 
});


video.addEventListener('mouseout', function() {
    video.pause(); 
});