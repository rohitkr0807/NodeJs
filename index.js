var rect = {
  perimeter : (x,y) => (2*(x+y)),
  area : (x,y) => (x*y)
}
function solveRect(l,b) {
  console.log("Solving for Rectangle lenght =  " + l + " " + "breadth = " + b);
  if (l < 0 || b < 0)
  {
    console.log("Invalid length or breadth");
  }
  else {
    console.log("The area of Rectangle is " + rect.area(l,b));
    console.log("perimeter of Rectangle is " + rect.perimeter(l,b));
  }
}
solveRect(2,4)
solveRect(3,5)
solveRect(-3,7)
