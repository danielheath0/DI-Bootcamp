import React, { useState, useEffect } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached!");

    return () => {
      setFavoriteColor("yellow");
    };
  }, []);

  return (
    <>
      <h1>My favorite color is {favoriteColor}</h1>
      <button
        onClick={() => {
          setFavoriteColor("blue");
        }}>
        Blue me
      </button>
    </>
  );
};

export default Color;
