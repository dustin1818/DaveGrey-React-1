import Header from "./header"
import Content from "./content"
import Footer from "./footer"
import Counter from "./counter"
import Grocery from "./grocery"
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };
  return (  
    <div className="App">
      <Header title = "Groceries List" />
      <Grocery
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      {/* <Content />
      <Counter /> */}
      <Footer 
      length = {items.length}
      />
    </div>
  )
}

export default App
