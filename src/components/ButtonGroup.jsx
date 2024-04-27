import { useItemStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemStore((state) => state.resetToInitial);
  const removeAllItems = useItemStore((state) => state.removeAllItems);

  const secondaryButton = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButton.map(({ text, onClick }) => (
        <Button key={text} buttonType="secondary" onClick={onClick}>
          {text}
        </Button>
      ))}
    </section>
  );
}
