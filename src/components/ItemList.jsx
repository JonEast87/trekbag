import EmptyView from "./EmptyView";

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          checked={item.packed}
          type="checkbox"
          onChange={() => handleToggleItem(item.id)}
        />
        {item.name}
      </label>

      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
