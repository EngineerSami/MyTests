console.log("page loaded...");

const video = document.getElementById('vid');


video.addEventListener('mouseover', function() {
    video.play(); 
});


video.addEventListener('mouseout', function() {
    video.pause(); 
});
const button1 = document.getElementById('btn');

        
        button1.addEventListener('click', function() {
            
            button1.textContent = 'Unsubscribe';
        });
        const button = document.getElementById('btn');


button.addEventListener('click', function() {

    button.style.backgroundColor = 'gray'; 
});