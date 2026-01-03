import { useId } from "react";

function UseIdLab() {
  const nameId = useId();
  const emailId = useId();

  return (
    <div className="lab-card">
      <h3>useId</h3>
      <br/>
      <p>
        useId generates unique, stable IDs for accessibility attributes.
      </p>
      <div>
        <label htmlFor={nameId}>Name:</label>
        <br />
        <input id={nameId} type="text" placeholder="Enter name" />
      </div>

      <br />

      <div>
        <label htmlFor={emailId}>Email:</label>
        <br />
        <input id={emailId} type="email" placeholder="Enter email" />
      </div>
    </div>
  );
}

export default UseIdLab;
