/* Classes seems to be the same as java. They have constructor, extends,modifiers public private protected blah blah */
/* But they have an alternate way of writing constructor as well */

/* Normal way to define and use constructor
class Vehicle {
  theme: boolean;

  constructor(theme: boolean) {
    this.theme = theme;
  }
}

*/

/* Alternate Way to USe constructor*/

class Vehicle {
  //will be assigned as instance variable
  constructor(protected theme: boolean) {}
}

class Car extends Vehicle {
  constructor(private color: string, theme: boolean) {
    //Make note that we have not added modifier to theme or it will be created as instance in Car
    super(theme);
  }

  public getColor() {
    return this.color;
  }
}

let car = new Car("red", true);
console.log(car.getColor());
