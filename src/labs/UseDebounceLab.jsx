import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function UseDebounceLab() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  return (
    <div className="lab-card">
      <h3 >useDebounce (Custom Hook)</h3>
      <br/>
      <p>
        useDebounce delays updating a value until the user stops typing.
      </p>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    <br/><br/>
      <h4>Typing Value: {search}</h4>
      <h4>Debounced Value: {debouncedSearch}</h4>
    </div>
  );
}

export default UseDebounceLab;
