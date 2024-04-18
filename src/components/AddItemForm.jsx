import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation to prevent blank entries
    if (!itemText) {
      alert("Item cannot be empty.");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: new Date().getTime,
      name: itemText,
      packed: false,
    };

    // useState adds it to the current list with a spread operator
    setItems((prev) => [...prev, newItem]);
    setItemText("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}
