const TodoItem = ({ id, text, isCompleted, onDelete, onToggleComplete }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggleComplete(id)}
      />
      <span style={isCompleted ? { textDecoration: "line-through" } : {}}>
        {text}
      </span>
      <div onClick={() => onDelete(id)} className="delete-todo">
        Delete
      </div>
    </div>
  );
};

export default TodoItem;
