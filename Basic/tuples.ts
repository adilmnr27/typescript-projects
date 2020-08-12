const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//order is quit important as values cannot be interchanged
const pepsiTupple = ["black", true, 60];

//adding type to prevent reordering

const pepsiTuppleWithAnnotation: [string, boolean, number] = [
  "black",
  true,
  60,
];

//But writing everything is painful. So ..

type Drink = [string, boolean, number];

const pepsiTuppleWithAnnotation2: Drink = ["black", true, 60];
