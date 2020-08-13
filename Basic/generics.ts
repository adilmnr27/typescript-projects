/* -------------Class Generics*----------------------*/
class Valueof<T> {
  constructor(public theValue: T) {}
  getValue() {
    return this.theValue;
  }
}

let objectString = new Valueof<string>("red");
let objectNumber = new Valueof(2);

/*--------------Function Generics-------------------------*/

function printValue<T>(data: T): void {
  console.log(data);
}

printValue(2);

/*-----------Generic Constraints---------------------------*/

class House {
  print() {}
}

class Car {
  print() {}
}

// now we have two classes with common print method. I need a generic function too invke the print method

/*
function printHouseOrCar<T>(data: T): void {
  data.print(); //error is thrown here . Because it could happen that we pass an object that doesnot have function T
}
*/

//So we put a constraint

//Step 1 :- Create an interface

interface Printable {
  print(): void; //after colon we specify the return type
}

//Step 2 :- We say that T type will always have print() method by saying T extends Printable

function printHouseOrCar<T extends Printable>(data: T): void {
  data.print(); //the error is gone now as if are now assuring typescirpt that object passed will have Print method
}
