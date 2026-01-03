import { useCallback, useState } from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return (
    <button onClick={onClick}>
      Click from Child
    </button>
  );
}

function UseCallbackLab() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  const handleClick = useCallback(() => {
    alert("Child button clicked");
  }, []);

  return (
    <div className={`${theme ? "dark" : "light"} lab-card`}>
      <h3 >useCallback</h3>
      <br/>
      <p>
        useCallback memoizes functions so they are not recreated on every render.
      </p>
        <br/>
      <h4>Count: {count}</h4>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br /><br />

      <button onClick={() => setTheme(!theme)}>
        Toggle Theme
      </button>

      <br /><br />

      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallbackLab;
