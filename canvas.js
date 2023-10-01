function changeColorBlue(){
    var divElement1 =
    document.getElementById("div1");
    
    divElement1.style.backgroundColor= "blue";
}
function changeColorRed(){

    var canvas = document.getElementById("div2");
    canvas.style.backgroundColor = "red";
    var context  = canvas.getContext("2d");
    context.fillStyle = "yellow";
    context.fillRect(10,10,60,60);
    context.fillRect(80,10,80,60);

    context.fillStyle = "black";
    context.font = "20px Arial";
    context.fillText("Hello", 15, 50);
    context.fillStyle = "black";
    context.font = "20px Arial";
    context.fillText("World", 85, 50);
}
//const myCanvas = document.getElementById("myCanvas");
//const ctx = myCanvas.getContext("2d");
//ctx.fillRect(20, 20, 150, 100);