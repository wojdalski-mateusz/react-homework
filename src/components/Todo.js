import { useState } from "react";
import Button from "./Button";

function Todo({ newLogoText, setNewLogoText}) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTask);
    setNewTask("");
  };

  const changeLogo = () => {
    setNewLogoText(newLogoText === "Logo" ? "Nowe Logo" : "Logo");
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <div className="todo-list">
        <form onSubmit={onFormSubmit}>
          <input
            placeholder="wpisz treść"
            value={newTask}
            onChange={({ target }) => setNewTask(target.value)}
          />
          <button>Dodaj</button>
        </form>
        <div className="tasks-list">
          {tasks.map(({ id, content }) => (
            <li key={id} className="task">
              <button className="task" onClick={() => removeTask(id)}>
                {content}
              </button>
            </li>
          ))}
        </div>
      </div>
      <Button
        onClick={changeLogo}
        className={"logo-button"}
        text={"Zmień logo"}
      />
    </div>
  );
}

export default Todo;
