
{
function removeDiv() {
    const div = document.getElementById("big1"); 
    if (div) {
        div.remove(); 
    }
}

    
document.getElementById("icon").addEventListener("click", removeDiv);

}

    
    
        {
            function changeText() {
                document.getElementById("h2").innerText = "Joe Doe";
            }
    
            
            document.getElementById("link").addEventListener("click", changeText);
      
        }
        {
        let count = 0;
        
        
        function incrementCounter() {
            count -= 1; 
            document.getElementById("Connection").textContent = count; 
        }
        let count2 = 0;
        
       
        
        function incrementCounter() {
            count2 += 1; 
            document.getElementById("Connection2").textContent = count2; 
        }
        
        
        document.getElementById("FT").addEventListener("click", incrementCounter);
        document.getElementById("FT1").addEventListener("click", incrementCounter);
        document.getElementById("FT2").addEventListener("click", incrementCounter);
        document.getElementById("FT3").addEventListener("click", incrementCounter);
        }
    

