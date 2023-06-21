import Header from "./header"
import AddItem from "./AddItem"
import SearchItem from "./SearchItem"
import Content from "./content"
import Footer from "./footer"
import Counter from "./counter"
import Grocery from "./grocery"
import { useState } from "react";

function App() {
  const [items, setItems] = useState((JSON.parse(localStorage.getItem("shoppingList"))));

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1  : 1;
    const mynewItem = {id, checked: false, item};
    const listItems = [...items, mynewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return
    addItem(newItem);
    setNewItem("");
  }

  return (  
    <div className="App">
      <Header title = "Groceries List" />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
      search = {search}
      setSearch = {setSearch}
      />
      <Grocery
        items = {items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
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
