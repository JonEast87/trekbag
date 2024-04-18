import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleResetToInitial,
  handleRemoveAllItems,
}) {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />

      <ButtonGroup
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleResetToInitial={handleResetToInitial}
        handleRemoveAllItems={handleRemoveAllItems}
      />
    </div>
  );
}
