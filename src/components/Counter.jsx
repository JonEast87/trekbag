export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <p>
      <b>
        {numberOfItemsPacked} / {totalNumberOfItems} items packed
      </b>
    </p>
  );
}
