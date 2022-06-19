// Function to take in two arguments and return a path

export default function polygonGenerator (xStartingPos , yStartingPos){

    yStartingPos -= 16;
    // Generate a polygon with random points

    let r = 2; //r is the maximum a vertex can vary. Might also need to be a function of screenwidth

    let c1 = r * Math.random();
    let c2 = r * Math.random();
    let c3 = r * Math.random();
    let c4 = r * Math.random();


    let x = xStartingPos + c1;
    let y = yStartingPos + c1;

    //width (a) and height (b) of rectangle sides. Should ideally be a function of screenwidth?
    let a = 18;
    let b = 12;

    let x2 = a + xStartingPos - c2;
    let y2 =  yStartingPos + c2;

    let x3 = a + xStartingPos - c3;
    let y3 = b + yStartingPos -c3;

    let x4 = xStartingPos + c4;
    let y4 = b + yStartingPos -c4;

    let polygon = 'M' + x + ',' + y;
    polygon += 'L' + x2 + ',' + y2;	
    polygon += 'L' + x3 + ',' + y3;
    polygon += 'L' + x4 + ',' + y4;
    //polygon += 'L' + x + ',' + y  ;
    polygon += 'Z';
    return polygon;

}

