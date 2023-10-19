function changeColorBlue(){
    var divElement1 =
    document.getElementById("div1");
    divElement1.style.backgroundColor= "blue";
    var divElement2 =
    document.getElementById("div2");
    divElement2.style.backgroundColor= "green";
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
function doOrange() {
    var canvas = document.getElementById("div2");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.clientWidth,canvas.height);
    canvas.style.backgroundColor = "orange";
}
//const myCanvas = document.getElementById("myCanvas");
//const ctx = myCanvas.getContext("2d");
//ctx.fillRect(20, 20, 150, 100);


var fgImage = null;
var bgImage = null;
var fgCanvas;
var bgCanvas;
var mImage = null;
var mCanvas;
var mCanvas ;

function upload(){
    var fileinput = document.getElementById("finput");
    mImage = new SimpleImage(fileinput);
    mCanvas = document.getElementById("can1");
    mImage.drawTo(mCanvas);
}
function loadForegroundImage() {
  var file = document.getElementById("fgfile");
  fgImage = new SimpleImage(file);
  fgCanvas = document.getElementById("fgcan");
  fgImage.drawTo(fgCanvas);
}

function loadBackgroundImage() {
  var file = document.getElementById("bgfile");
  bgImage = new SimpleImage(file);
  bgCanvas = document.getElementById("bgcan");
  bgImage.drawTo(bgCanvas);
}

function createComposite() {
  // this function creates a new image with the dimensions of the foreground image and returns the composite green screen image
  var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
  var greenThreshold = 220;
  for (var pixel of fgImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > greenThreshold) {
      //pixel is green, use background
      var bgPixel = bgImage.getPixel(x,y);
      output.setPixel(x,y,bgPixel);
    }
    else {
      //pixel is not green, use foreground
      output.setPixel(x,y,pixel);
    }
  }
  return output;
}

function doGreenScreen() {
  //check that images are loaded
  if (fgImage == null  || ! fgImage.complete()) {
    alert("Foreground image not loaded");
  }
  if (bgImage == null || ! bgImage.complete()) {
    alert("Background image not loaded");
  }
  // clear canvases
  clearCanvas();
  // call createComposite, which does green screen algorithm and returns a composite image
  var finalImage = createComposite();
  finalImage.drawTo(fgCanvas);
}

function clearCanvas() {
    
  doClear(mCanvas);
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}


//Do Gray scale for image

function createGray() {
    // this function creates a new image with the dimensions of the image and returns the Gray Scale image
    var output = new SimpleImage(mImage.getWidth(),mImage.getHeight());
    
    for (var pixel of mImage.values()) {

      var avgV = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      pixel.setRed(avgV);
        pixel.setGreen(avgV);
        pixel.setBlue(avgV);

        var x = pixel.getX();
        var y = pixel.getY();
          var IPixel = mImage.getPixel(x,y);
          output.setPixel(x,y,IPixel);
        
    }
    return output;
  }
  
function drawGray(){
          if (mImage == null || ! mImage.complete()) {
        alert("image not loaded");
      }
      // clear canvases
      clearCanvas();
  // call createGray, which does gray scale algorithm and returns a gray image
  var finalImage = createGray();
  finalImage.drawTo(mCanvas);
}

function createRed() {
    // this function creates a new image with the dimensions of the image and returns the Gray Scale image
    var output = new SimpleImage(mImage.getWidth(),mImage.getHeight());
    
    for (var pixel of mImage.values()) {

     if(pixel.getRed()<250){
        pixel.setRed(250);
     }
        var avgV = (pixel.getGreen() + pixel.getBlue()) / 2;
      
        pixel.setGreen(avgV);
        pixel.setBlue(avgV);

        var x = pixel.getX();
        var y = pixel.getY();
          var IPixel = mImage.getPixel(x,y);
          output.setPixel(x,y,IPixel);
        
    }
    return output;
  }
  
function drawRed(){
          if (mImage == null || ! mImage.complete()) {
        alert("image not loaded");
      }
      // clear canvases
      clearCanvas();
  // call createGray, which does gray scale algorithm and returns a gray image
  var finalImage = createRed();
  finalImage.drawTo(mCanvas);
}


function createBlur() {
    // this function creates a new image with the dimensions of the image and returns the Gray Scale image
    var output = new SimpleImage(mImage.getWidth(),mImage.getHeight());
    

    for (var pixel of mImage.values()){
        var x = pixel.getX()+1;
        var y = pixel.getY()+1;
        
        // if (x+ < mImage.getWidth()/2){
        //     pixel.setRed(255);
        // }
        // if (y-5>=mImage.getHeight()/2){
        //     pixel.setBlue(255);
        // }
       
    
          var IPixel = mImage.getPixel(x,y);
          output.setPixel(x,y,IPixel);
        
    }
    return output;
  }
  
function drawBlur(){
          if (mImage == null || ! mImage.complete()) {
        alert("image not loaded");
      }
      // clear canvases
      clearCanvas();
  // call createGray, which does gray scale algorithm and returns a gray image
  var finalImage = createBlur();
  finalImage.drawTo(mCanvas);
}