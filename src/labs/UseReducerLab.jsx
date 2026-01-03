import { useReducer } from "react";

const initialState = {
  username: "",
  email: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function UseReducerLab() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="lab-card">
      <h3>useReducer</h3>
      <br/>
      <p>
        useReducer is used for complex state logic and predictable state updates.
      </p>

      <input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: "SET_USERNAME", payload: e.target.value })
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />

      <br /><br />

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

      <h4>State Preview:</h4>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default UseReducerLab;
