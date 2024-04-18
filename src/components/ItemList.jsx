import { useState } from "react";
import { initalItems } from "../lib/constants";

export default function ItemList() {
  const [item, setItems] = useState(initalItems);

  return (
    <ul>
      {item.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  );
}
