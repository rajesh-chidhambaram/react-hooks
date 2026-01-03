import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";
import "./App.css";

function App() {
  const [selectedHook, setSelectedHook] = useState("useState");

  return (
    <div className="app">
      <div className="content">
        <Sidebar
          selectedHook={selectedHook}
          setSelectedHook={setSelectedHook}
        />
        <MainPanel selectedHook={selectedHook} />
      </div>
    </div>
  );
}

export default App;
