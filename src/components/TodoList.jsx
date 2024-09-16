import { useState } from "react";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Build a todo app", isCompleted: true },
    { id: 3, text: "Deploy to production", isCompleted: false },
  ]);

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onDelete={onDelete} onToggleComplete={onToggleComplete} />
      ))}
    </div>
  );
};
export default TodoList;
