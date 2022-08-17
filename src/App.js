import "./App.css";
import Data from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState([""]);

  return (
    <div className="App">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="data">
        {Data.filter((item) => {
          if (query == "") {
            return item;
          } else if (
            item.first_name.toLowerCase().includes(query.toLowerCase())
          ) {
            return item;
          }
        }).map((item) => {
          return <p key={item.id}>{item.first_name}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
