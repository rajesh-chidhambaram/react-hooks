import { useEffect, useRef, useState } from "react";

function UseRefLab() {
  const [value, setValue] = useState("");
  const previousValue = useRef("");

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return (
    <div className="lab-card">
      <h3>useRef</h3>
      <br/>
      <p>
        useRef stores values that persist across renders without causing
        re-renders.
      </p>

      <input
        type="text"
        placeholder="Type something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br/><br/>

      <h4>Current Value: {value}</h4>
      <h4>Previous Value: {previousValue.current}</h4>
    </div>
  );
}

export default UseRefLab;
