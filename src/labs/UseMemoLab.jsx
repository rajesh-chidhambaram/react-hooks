import { useMemo, useState } from "react";

function slowFunction(num) {
  console.log("Expensive calculation running...");
  let result = 0;
  for (let i = 0; i < 500000000; i++) {
    result += num;
  }
  return result;
}

function UseMemoLab() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const calculatedValue = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div className={`${dark ? "dark" : "light"} lab-card`}>
      <h3 >useMemo</h3>
      <br/>
      <p>
        useMemo prevents expensive calculations from running on every render.
      </p>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <h4>Calculated Value: {calculatedValue}</h4>
    <br/>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default UseMemoLab;
