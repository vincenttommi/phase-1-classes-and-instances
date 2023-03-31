// class square{

//     constructor(sideLength){

//         this.sideLength = sideLength; 
//         //defines our properties in the constructor'
//     }

//      area(){
//      //method  return the multipliaction of both sides
//         return  this.sideLength *  this.sideLength;
       
//     }
// }

// const  square =  new square(5);
// square;
// square.sideLength;
// square.area();


class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
  
    area() {
        //method
      return this.sideLength * this.sideLength;
    }
  }
  
  const square = new Square(5);
  console.log(square); // => Square { sideLength: 5 }
  square.sideLength; // => 5
   // => 2

console.log(square.area());
console.log(square.sideLength);