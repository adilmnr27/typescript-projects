import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

//defining the type of response data
interface TODO {
  title: string;
  id: number;
  completed: boolean;
}

axios.get(url).then((res) => {
  const { id, title, completed } = res.data as TODO;
  logFunction(id, title, completed);
});

//id:number This is type annotation
const logFunction = (id: number, title: string, completed: boolean) => {
  console.log(`The id is ${id}.
  The title is ${title}
  The status is ${completed}`);
};
