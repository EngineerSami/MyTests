
{

    function removeDiv() {
        const div = document.getElementById("left-top-part-of-connection-req");
        const div1 = document.getElementById("right-top-part-of-connection-req");
        if (div) {
            div.remove();
        }
        if (div1) {
            div1.remove();
        }
    }


    document.getElementById("icon-true-top").addEventListener("click", removeDiv);
    document.getElementById("icon-false-top").addEventListener("click", removeDiv);

}
{

    function removeDiv() {
        const div2 = document.getElementById("left-down-part-of-connection-req");
        const div3 = document.getElementById("right-down-part-of-connection-req");
        if (div2) {
            div2.remove();
        }
        if (div3) {
            div3.remove();
        }
    }


    document.getElementById("icon-true-down").addEventListener("click", removeDiv);
    document.getElementById("icon-false-down").addEventListener("click", removeDiv);

}
{
    function changeText() {
        document.getElementById("h1").innerText = "Sami Daraghmeh";
    }


    document.getElementById("link").addEventListener("click", changeText);

}
{


    let count = document.getElementById("num-of-connection-req").innerText - 1



    function incrementCounter() {

        document.getElementById("num-of-connection-req").innerText = count;
        count--;
    }


    document.getElementById("icon-true-top").addEventListener("click", incrementCounter);
    document.getElementById("icon-false-top").addEventListener("click", incrementCounter);
    document.getElementById("icon-true-down").addEventListener("click", incrementCounter);
    document.getElementById("icon-false-down").addEventListener("click", incrementCounter);
}
{


    let count1 = document.getElementById("num-of-your-connections").innerText



    function incrementCounter() {

        document.getElementById("num-of-your-connections").innerText = count1++;
        count1++;
    }


    document.getElementById("icon-true-top").addEventListener("click", incrementCounter);
    document.getElementById("icon-false-top").addEventListener("click", incrementCounter);
    document.getElementById("icon-true-down").addEventListener("click", incrementCounter);
    document.getElementById("icon-false-down").addEventListener("click", incrementCounter);
}
