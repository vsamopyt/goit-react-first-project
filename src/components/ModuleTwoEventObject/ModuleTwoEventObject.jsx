export default function ModuleTwoEventObject() {
  const handleClick = event => {
    console.log(event);
  };
  return (
    <ul>
      <li>
        <button onClick={handleClick}>Variant-1</button>
      </li>
      <li>
        <button onClick={event => console.log(event)}>Variant-2</button>
      </li>
    </ul>
  );
}
