const hooksList = [
  { label: "useState", value: "useState" },
  { label: "useEffect", value: "useEffect" },
  { label: "useRef", value: "useRef" },
  { label: "useId", value: "useId" },
  { label: "useMemo", value: "useMemo" },
  { label: "useCallback", value: "useCallback" },
  { label: "useContext", value: "useContext" },
  { label: "useReducer", value: "useReducer" },
  { label: "useToggle (Custom)", value: "useToggle" },
  { label: "useInput (Custom)", value: "useInput" },
  { label: "useDebounce (Custom)", value: "useDebounce" },
  { label: "usePrevious (Custom)", value: "usePrevious" },
];

function Sidebar({ selectedHook, setSelectedHook }) {
  return (
    <aside className="sidebar">
      <h1 >React Hooks Lab</h1>
        
      {hooksList.map((hook) => (
        <button
          key={hook.value}
          className={selectedHook === hook.value ? "active" : ""}
          onClick={() => setSelectedHook(hook.value)}
        >
          {hook.label}
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;
