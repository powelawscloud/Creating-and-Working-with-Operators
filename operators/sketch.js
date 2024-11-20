
var yPos;
 

function setup() 
{
    
    createCanvas(512,512);
    yPos = 120;
    xPos = 120;
    shapeWidth = 20
    shapeHeight = 20
    
    
    //text(" Now lets begin!" , 20,20);
    //text(1 - 2 , 20,40);
    //text(5+12 , 20,60);
    //text(24536 * 54 , 20,80);
   // 
   // 
   // 
    //ellipse(50, yPos, 20,20);
    //yPos = yPos + 20;
    //ellipse(50, yPos, 20,20);
    //yPos = yPos + 20;
    //ellipse(50, yPos, 20,20);
    //yPos = yPos + 20;
    //ellipse(50, yPos, 20,20);
    //yPos = yPos + 20;
    //text("yPos: " + yPos, 30, yPos);
    
}

function draw()
{
    background(255)
    fill(230,20,100)
    ellipse(xPos, yPos, shapeWidth,shapeHeight);
    yPos = yPos + 1;
    xPos = xPos + 1;
    shapeWidth = shapeWidth - 1;
    shapeHeight = shapeHeight - 1; 


    ellipse(xPos, yPos, shapeWidth,shapeHeight);
    yPos = yPos + 1;
    xPos = xPos + 1;
    shapeWidth = shapeWidth - 1;
    shapeHeight = shapeHeight - 1; 

  
}






