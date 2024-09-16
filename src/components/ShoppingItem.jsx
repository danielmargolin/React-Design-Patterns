import TrashIcon from "./TrashIcon";

const ShoppingItem = ({ id, name, isBought, onDelete, onToggleBought }) => {
    return (
      <div className="shopping-item">
        <input type="checkbox" checked={isBought} onChange={() => onToggleBought(id)} />
        <b>
          {name}
        </b>
        
          <TrashIcon onClick={() => onDelete(id)} />
        
      </div>
    );
  };
  
  export default ShoppingItem;