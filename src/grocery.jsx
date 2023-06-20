import ItemList from "./itemList";

const Grocery = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
      {items.length ? (
        <ItemList 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        /> 
      ) : (
        <p style={{ marginTop: "2rem" }}>Grocery List is empty. </p>
      )}
    </main>
  );
};

export default Grocery;
