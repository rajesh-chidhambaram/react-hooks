import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

function UsePreviousLab() {
  const [text, setText] = useState("");
  const previousText = usePrevious(text);

  return (
    <div className="lab-card">
      <h3>usePrevious (Custom Hook)</h3>
      <br/>
      <p>
        usePrevious stores the previous value of a state using useRef.
      </p>

      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br/><br/>

      <h4>Current Value: {text}</h4>
      <h4>Previous Value: {previousText}</h4>
    </div>
  );
}

export default UsePreviousLab;
