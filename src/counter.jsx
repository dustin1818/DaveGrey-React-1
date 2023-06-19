import React, {useState} from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  //counter function
  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const decrement = () => {
    setCounter(counter - 1);
    console.log(counter);
  };
  const marginBottom = {
    marginBottom:'20px',
  }
  return (
    <div style={{paddingBottom:'50px'}}>
      {/* counter section  */}
      <h3 style={marginBottom}>Counter Test</h3>
      <p style={marginBottom}>
        Counter Number: {counter < 0 ? setCounter(counter + 1) : counter}{" "}
      </p>
      <div className="btn-container">
        <button onClick={increment}>add</button>
        <button onClick={decrement}>subtract</button>
      </div>
    </div>
  );
};

export default Counter;
