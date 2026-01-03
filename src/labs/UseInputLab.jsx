import useInput from "../hooks/useInput";

function UseInputLab() {
  const nameInput = useInput("");
  const emailInput = useInput("");

  return (
    <div className="lab-card">
      <h3>useInput (Custom Hook)</h3>
      <br/>
      <p>
        useInput abstracts common input state and change handling logic.
      </p>

      <input
        type="text"
        placeholder="Enter name"
        {...nameInput}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter email"
        {...emailInput}
      />

      <h4>Preview:</h4>
      <p>Name: {nameInput.value}</p>
      <p>Email: {emailInput.value}</p>
    </div>
  );
}

export default UseInputLab;
