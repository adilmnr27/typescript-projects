//Annptations fpr functions
// the above function would become

let printNumWithTypeScriptAnnotation2: (i: number) => void = (i) => {
  console.log(i);
};

//In the above example we added type annotations for the variable itself.  I think it is not necessary
// WE should add type annotations for function body

let addition = (a: number, b: number): number => {
  return a + b;
};

function add(a: number, b: number): number {
  return a + b;
}

//anonymous
const adder = function (a: number, b: number): number {
  return a + b;
};

//void
function log(msg: string): void {
  console.log(msg);
}

//never
function throwErr(msg: string): void {
  throw new Error();
}

function verifyMsg(msg: string): string {
  if (msg === "wrong") throw new Error();
  else return "right";
}

//destruction

const rectangle = {
  x: 10,
  y: 20,
};

function calPerimeter(rectangle: { x: number; y: number }): number {
  return rectangle.x + rectangle.y;
}

// Above funciton with destructuring

function calculatePerimeter({ x, y }: { x: number; y: number }) {
  return x + y;
}

//Annotation for object

const square = {
  x: 20,
  y: 10,
};

//destructuring
let { x, y }: { x: number; y: number } = square;
