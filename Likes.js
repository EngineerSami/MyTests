/*
{
let count = 0;


function incrementCounter() {
    count += 1; 
    document.getElementById("num").textContent = count; 
}


document.getElementById("btn").addEventListener("click", incrementCounter);
}
{
let count1 = 0;


function incrementCounter() {
    count1 += 1; 
    document.getElementById("num2").textContent = count1; 
}


document.getElementById("btn2").addEventListener("click", incrementCounter);
}
{
    let count2 = 0;
    
    
    function incrementCounter() {
        count2 += 1; 
        document.getElementById("num1").textContent = count2; 
    }
    
    
    document.getElementById("btn1").addEventListener("click", incrementCounter);
    }

    */

    function likeBtn(btnId){
        var numOfLikes =  document.getElementById(btnId);
        //alert(numOfLikes.innerText)
        likeNum= numOfLikes.innerText
        likeNum++
        document.getElementById(btnId).textContent = likeNum; 
    }