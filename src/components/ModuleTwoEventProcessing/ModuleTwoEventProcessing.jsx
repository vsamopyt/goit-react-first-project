export default function ModuleTwoEventProcessing() {
  const handleClick = () => {
    alert('heloo what is your name');
  };

  return (
    <>
      <button onClick={handleClick}>Variant-1</button>
      <button onClick={() => alert('Hello once more')}>Variant-2</button>
    </>
  );
}
