import React, { useState } from "react";
import "./App.css";

const InputRadio = () => {
  const [checkedValue, setCheckedValue] = useState("赤");

  const handleChange = (e) => setCheckedValue(e.target.value);

  return (
    <div className="App">
      <p>
        <b>{checkedValue}</b>
      </p>

      <label>
        <input
          type="radio"
          value="赤"
          onChange={handleChange}
          checked={checkedValue === "赤"}
        />
        赤
      </label>
      <label>
        <input
          type="radio"
          value="青"
          onChange={handleChange}
          checked={checkedValue === "青"}
        />
        青
      </label>
      <label>
        <input
          type="radio"
          value="黄"
          onChange={handleChange}
          checked={checkedValue === "黄"}
        />
        黄
      </label>
    </div>
  );
};

export default function App() {
  return <InputRadio />;
}
