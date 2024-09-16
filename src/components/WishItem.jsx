const WishItem = ({ id, img, isCompleted, onDelete, onToggleComplete }) => {
    return (
      <div className="wish-item">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggleComplete(id)}
        />
        <img src={img} alt="wish-img"/>
        <div onClick={() => onDelete(id)} className="delete-todo">
          Delete
        </div>
      </div>
    );
  };
  
  export default WishItem;
  