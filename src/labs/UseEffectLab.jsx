import { useEffect, useState } from "react";

function UseEffectLab() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(name ? `Hello, ${name}!` : "Waiting for name...");
  }, [name]);

  return (
    <div className="lab-card">
      <h3 >useEffect</h3>
      <br/>
      <p>
        useEffect is used for side effects like DOM updates, subscriptions, and
        timers.
      </p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br/><br/>
      
      {name && <p>Hello, {name}!</p>}

    </div>
  );
}

export default UseEffectLab;
