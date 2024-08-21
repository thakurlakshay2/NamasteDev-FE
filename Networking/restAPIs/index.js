import express from "express"; //for this kind of imprt change type in package.json to module
import bodyParser from "body-parser";
import { todos } from "./dummyConst.js";
//create app
const app = express();

app.use(bodyParser.json()); //act as middle ware, body parser required due to data being in serialized string form. (that's how it travels on the web)

app.all("/", (req, res) => {
  console.log(" i got a request");
});

//READ
app.get("/todos", (req, res) => {
  res.json(todos);
});

//CREATE
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(200).json({ message: "success" });
  console.log(" i got a request");
});

//UPDATE
app.put("/todos/:id", (req, res) => {
  const newTodo = req.body;
  const todoIndex = todos.findIndex(
    (data) => data.id + "" === req.params.id + ""
  );
  if (todoIndex >= 0) {
    todos[todoIndex] = newTodo;
    res.status(200).json({ message: "success" });
  } else res.status(404).json({ message: "not found" });
});

//DELETE
app.delete("/todos/:id", (req, res) => {
  const removalIndex = todos.findIndex(
    (data) => data.id + "" === req.params.id + ""
  );
  if (removalIndex === -1) {
    res.status(404).json({ message: "not found" });
  } else {
    todos.splice(removalIndex, 1);
    res.status(200).json({ message: "success" });
  }
});

//start app
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
