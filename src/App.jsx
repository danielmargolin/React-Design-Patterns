import "./App.css";
import ShoppingList from "./components/ShoppingList";

import TodoList from "./components/TodoList";
import WishList from "./components/WishList";

function App() {
  return (
    <>
      <TodoList />
      <ShoppingList />
      <WishList />
    </>
  );
}

export default App;
