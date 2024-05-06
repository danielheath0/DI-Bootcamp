import { useState } from "react";

const Events = () => {
  const [inputValue, setInputValue] = useState("");

  const [isToggleOn, setIsToggleOn] = useState("ON");

  const changeToggle = () => {
    if (isToggleOn === "ON") {
      setIsToggleOn("OFF");
    } else if (isToggleOn === "OFF") {
      setIsToggleOn("ON");
    }
  };

  const clickMe = () => {
    alert("I was clicked!");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert("You pressed the Enter key! The input was " + inputValue);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {" "}
      <button onClick={clickMe}>Click me!</button>
      <input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Press the ENTER key!"></input>
      <button onClick={changeToggle}>{isToggleOn}</button>
    </>
  );
};

export default Events;
