function setup() {
    createCanvas(600, 600);
  background ("white");
  }
    
    function draw() {
  
  stroke("black")
    fill("blue")
         
  // console.log(mouseIspressd);
    
  if (mouseIsPressed) {   
      rect(mouseX,mouseY,20, 35);
    } 
  }
  