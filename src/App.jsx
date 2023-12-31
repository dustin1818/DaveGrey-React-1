import Header from "./header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./content";
import Footer from "./footer";
import Counter from "./counter";
import Grocery from "./grocery";
import { useEffect, useState } from "react";

function App() {
  const API_URL = "  http://localhost:3000/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        //404 response
        if (!response.ok) {
          throw Error("Did not receive expected data");
        }
        const listItems = await response.json();
        // console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 5000)
  }, []);

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewItem = { id, checked: false, item };
    const listItems = [...items, mynewItem];
    setAndSaveItems(listItems);
  };

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
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p style={{marginTop:"40px"}}>Loading Items...</p>}
        {fetchError && <p style={{color:"red", marginTop:"40px"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Grocery
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      {/* <Content />
      <Counter /> */}
      <Footer length={items.length} />
    </div>
  );
}

export default App;
