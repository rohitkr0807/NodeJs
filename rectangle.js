module.exports = (x,y,callback) => {
  if (x<0 || y<0)
  {
    setTimeout(() => callback(new Error("Invalid length or breadth"), null),2000)
    // console.log("Rectangle is not possible");
  }else {
    setTimeout(() =>
      null, {perimeter : (x,y) => (2*(x+y)),
              area: (x,y) => (x*y)
            }
    ),2000
  }
}






perimeter = (x,y) => (2*(x+y));
area = (x,y) => (x*y);
