// Function to take in three arguments and return a path

export default function blobGenerator (){

   let blobX = 400;
    let blobY =400;
    let radius = 18;
    
    // Generate a blob with random points

    let p = 4; //p is the maximum a vertex can vary. Might also need to be a function of screenwidth

    let c1 = p * Math.random();
    let c2 = p * Math.random();
    let c3 = p * Math.random();
    
    
    let x = blobX -radius +c1;
    let y = blobY -c1;

    let x2 = blobX + radius -c2;
    let y2 = blobY -c2;

    let bx1 = x;
    let by1 = y - 5*radius/4 +c3;

    let bx2 = x2;
    let by2 = y2 -radius*5/4 +c3;

    let bx3 = x2;
    let by3 = y2 +5*radius/4 -c3;

    let bx4 = x;
    let by4 = y+5*radius/4 -c3;

    
    let polygon = 'M' + x + ',' + y;
    polygon += 'C' + bx1 + ',' + by1 + ',' + bx2 + ',' + by2 + ',' + x2 + ',' + y2;	
    polygon += 'C' + bx3 + ',' + by3 + ',' + bx4 + ',' + by4 + ',' + x + ',' + y ;
    polygon += 'Z';

    return polygon;

}

