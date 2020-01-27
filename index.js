var rect = require('./rectangle');

function solveRect(l,b) {
  console.log("Solving for Rectangle lenght =  " + l + " " + "breadth = " + b);
    rect(l,b,(err,rectangle) => {
      if (err)
      {
        console.log("error", err.message);
      }else {
        console.log("the area", rectangle.area, rectangle.perimeter);
      }
    });

  }
solveRect(2,4)
solveRect(3,5)
solveRect(-3,7)
