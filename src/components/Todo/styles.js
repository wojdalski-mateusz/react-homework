import styled from "styled-components";

export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 300px;
  max-width: 350px;
  margin-top: 30px;
  word-wrap: break-word;
`;

export const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Task = styled.li`
  list-style: none;
  padding: 0px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
  font-weight: bold;
  align-items: center;
  border: none;
  background: none;
`;