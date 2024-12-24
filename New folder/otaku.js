function welcome() {
    var searchInput = document.getElementById("search").value; 

    alert("You have Searched for the Anime "+ searchInput);
}
function hideButton() {
    document.getElementById("play").style.display = "none";
}
function incrementText() {
    let counterElement = document.getElementById("num-of-heart");
    let counterValue = parseInt(counterElement.textContent); 
    counterValue++; 
    counterElement.textContent = counterValue; 
  }
  let clickCount = 0;

function changeImage() {
  var image = document.getElementById("myimage");
  clickCount++;

  if (clickCount <= 4) {
    if (clickCount== 1) {
      image.src = "./bd-item-2.jpg"; 
    } else if (clickCount== 2){
      image.src = "./tv-5.jpg";
    }
    else if (clickCount== 3){
        image.src = "./tv-2.jpg";
      }
      else if (clickCount== 4){
        image.src = "./blog-details-pic.jpg";
      }
      
  } 
}
function backImage() {
    var image = document.getElementById("myimage");
    clickCount++;
  
    if (clickCount <= 9) {
      
       if (clickCount== 5){
        image.src = "./tv-2.jpg";
      }
      else if (clickCount== 6){
          image.src = "./tv-5.jpg";
        }
        else if (clickCount== 7){
          image.src = "./bd-item-2.jpg";
        }
        else if (clickCount== 8){
            image.src = "./bd-item-1.jpg";
          }
        
    } 
  }
  