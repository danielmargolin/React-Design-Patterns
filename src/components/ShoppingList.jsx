import { useState } from "react";

import ShoppingItem from "./ShoppingItem";

const ShoppingList = () => {
    const [products, setProducts] = useState([
      { id: 1, name: "Apple", isBought: true },
      { id: 2, name: "Milk", isBought: true },
      { id: 3, name: "Beer", isBought: false },
    ])

    const onDelete = (id) => {
        setProducts(products.filter(product => product.id !== id))
    }

    const onToggleBought = (id) => {
        setProducts(
          products.map((product) => {
            if (product.id === id) {
              return {
                ...product,
                isBought: !product.isBought,
              };
            }
            return product;
          })
        );
      };
  
    return (
      <div className="container">
        <h1>Shopping List</h1>
          {products.map(todo => <ShoppingItem key={todo.id} {...todo} onDelete={onDelete} onToggleBought={onToggleBought} />)}
      </div>
    );
  };
  export default ShoppingList;