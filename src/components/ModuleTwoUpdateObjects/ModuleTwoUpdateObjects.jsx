import { useState } from 'react';
export default function ModuleTwoUpdateObjects() {
  const [values, setValues] = useState({ x: 0, y: 0 });
  // console.log("values", values, values.x);

  function updValuesX() {
    setValues({ ...values, x: (values.x += 1) });
  }
  function updValuesY() {
    setValues({ ...values, y: (values.y += 1) });
  }
  return (
    <>
      <button onClick={updValuesX}>value X: {values.x}</button>

      <button onClick={updValuesY}>value Y: {values.y}</button>
    </>
  );
}
