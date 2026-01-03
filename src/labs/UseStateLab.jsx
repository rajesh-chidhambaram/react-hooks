import { useState } from "react";

function UseStateLab() {
  const [count, setCount] = useState(0);

  return (
    <div className="lab-card">
      <h3>useState</h3>
      <br/>
      <p>
        useState lets you add state to a functional component. Updating state
        causes a re-render.
      </p>
    <br/>
      <h4>Count: {count}</h4>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseStateLab;
