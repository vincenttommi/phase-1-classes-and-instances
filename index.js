// // learning   goals 
// // creation of class using constructor
// // definition of instamce properties
// // instances  are copies generated from  clasess and contains unique data  when ana instance  is created

// // nb  js objects inherit properties  and methods  from a prototype


// class Fish{


//     constructor(name, age){

//         this.name =  name;
//         this.age = age;


//    //creating ana instance of a class




//     }
// }

// //passing arguments into a constructor



// const  fish =  new Fish("Red", 3);
// const vin =  new Fish("blue", 1);



// console.log(redFish);
// console.log(blueFish);

class Fish {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

const redFish = new Fish("Red", 3);
const blueFish = new Fish("Blue", 1);

redFish; // => Fish { name: 'Red', age: 3 }
blueFish; // => Fish { name: 'Blue', age: 1 }

