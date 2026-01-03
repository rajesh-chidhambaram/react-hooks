import useToggle from "../hooks/useToggle";

function UseToggleLab() {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div className="lab-card">
      <h3>useToggle (Custom Hook)</h3>
      <br/>
      <p>
        useToggle is a custom hook used to toggle boolean values.
      </p>

      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Content
      </button>

      {isVisible && <p>This content is toggled using useToggle.</p>}
    </div>
  );
}

export default UseToggleLab;
