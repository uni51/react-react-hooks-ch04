import React from "react";
import "./App.css";

const handleClick = () => {
  console.log("clickされました！");
};

const SampleButton = () => {
  return <input type="button" value="ボタン" onClick={handleClick} />;
};

export default function App() {
  return <SampleButton />;
}
