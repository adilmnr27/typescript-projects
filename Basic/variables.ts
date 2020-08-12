let hello: string = "hello World";
let helloWithAnnotation = "hello World";
//array

let numberArray: number[] = [1, 2];

let flexibleArray: (string | number)[];
flexibleArray.push(1);
flexibleArray.push("1");
//class

class Human {}
let human: Human = new Human();

//object

let point = {
  x: "10",
  y: 20,
};

// the above should be written as
let pointWithTypeAnnotation: { x: string; y: number } = {
  x: "10",
  y: 20,
};

//function

let printNum = (i) => {
  console.log(i);
};

// the above function would become

let printNumWithTypeScriptAnnotation: (i: number) => void = (i) => {
  console.log(i);
};

// When to use type annotations
//1) Declaration and initilization are not on same line

//2) When A function returns any like JSON.parse()
//For Example
let pointFromJSONStringBefore = JSON.parse('{"x":20,"y":30}');
//As JSON.parse() could return boolean o rnumber or any other object the type returned is any
//So this can be converted into
let pointFromJSONStringAfter: { x: number; y: number } = JSON.parse(
  '{"x":20,"y":30}'
);

//3)When the type cannot be inferred . Maybe bad cpde practice / I dont know
let changeAbleValue: number | boolean;
changeAbleValue = 10;
changeAbleValue = false;
