import React, { useState } from "react";
import "./App.css";

const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState("HTML");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <p>
        <b>{selectedValue}</b>
      </p>

      <select value={selectedValue} onChange={handleChange}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>
    </div>
  );
};

export default function App() {
  return <InputSelectBox />;
}
