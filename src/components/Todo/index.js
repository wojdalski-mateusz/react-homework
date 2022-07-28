import { useState } from "react";
import Button from "../Button/index";
import * as S from "./styles";

const Todo = ({ newLogoText, setNewLogoText }) => {
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

    if (newTask === "") {
      return;
    }
    addNewTask(newTask);
    setNewTask("");
  };

  const fillTaskContent = (event) => {
    const userInputContent = event.target.value;
    if (userInputContent.length > 40) {
      window.alert("User task's content shouldn't exceed 40 characters");
      return;
    }
    setNewTask(userInputContent);
  };

  const changeLogo = () => {
    setNewLogoText(newLogoText === "Logo" ? "Nowe Logo" : "Logo");
  };

  return (
    <S.TodoWrapper>
      <h1>Todo List</h1>
      <S.TodoList>
        <form onSubmit={onFormSubmit}>
          <input
            placeholder="wpisz treść"
            value={newTask}
            onChange={(event) => fillTaskContent(event)}
          />
          <Button text={"Dodaj"} />
        </form>
        <S.Tasks>
          {tasks.map(({ id, content }) => (
            <S.Task key={id}>
              <Button
                className={"task"}
                onClick={() => removeTask(id)}
                text={content}
              />
            </S.Task>
          ))}
        </S.Tasks>
      </S.TodoList>
      <Button
        onClick={changeLogo}
        className={"logo-button"}
        text={"Zmień logo"}
      />
    </S.TodoWrapper>
  );
};

export default Todo;
