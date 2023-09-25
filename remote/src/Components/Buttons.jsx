import React from "react";

const buttonStyles = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
};

export default function DeleteButton() {
  const handleClick = () => {
    alert("delete button clicked");
  };
  return (
    <div className="container">
      <button style={buttonStyles} onClick={() => handleClick()}>
        Delete Button
      </button>
    </div>
  );
}
