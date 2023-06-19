import React, { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dustin");
  const randomName = () => {
    const names = ["Dustin", "Denise", "Dian","Dennis", "Cel"];
    const randomize = Math.floor(Math.random() * 5);
    setName(names[randomize]);
  };

  const marginBottom = {
    marginBottom: "20px",
  };

  const handleClick = () => {
    console.log("Clicked succesful!");
  };
  const handleClickWithEvent = (name) => {
    console.log(`${name} clicked the button succesful!`);
  };

  const handleClickWithParam = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
     {/* update name section  */}
      <h3 onDoubleClick={handleClick} style={marginBottom}>
        Hi {name}!
      </h3>
      <button style={marginBottom} onClick={randomName}>
        Change User Name
      </button>
      <button
        style={marginBottom}
        onClick={() => handleClickWithEvent("Dustin")}
      >
        Click me!
      </button>
      <button onClick={(e) => handleClickWithParam(e)}>Click me!</button>
    </main>
  );
};

export default Content;
