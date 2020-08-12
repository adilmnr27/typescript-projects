//The return type of the function summary is string
interface Employer {
  name: string;
  age: number;
  salaryGiven: number;
  summary(): string;
}

interface Employee {
  name: string;
  age: number;
  salaryEarned: number;
  summary(): string;
}

//We can see that the attributes defined in Human interface are part of Employer and Empoyee Interface as well
//Therefore Employer and Employee are both of type Human
interface Human {
  name: string;
  age: number;
  summary(): string;
}

// SO the function accepts argument of type Human (could be employer/employee). Polymorphism
const logHumanDetails = (human: Human): void => {
  console.log(human.summary());
};

const employer1 = {
  name: "nar",
  age: 10,
  summary(): string {
    return `Age is ${this.age} and name is ${this.name} and salary Given is ${this.salaryGiven}`;
  },
};

const employee1 = {
  name: "uto",
  age: 10,
  summary(): string {
    return `Age is ${this.age} and name is ${this.name} and salary Earned is ${this.salaryEarned}`;
  },
};

logHumanDetails(employer1);
logHumanDetails(employee1);
