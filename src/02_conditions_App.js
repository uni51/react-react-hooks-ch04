import React, { useState } from "react";
import "./App.css";

// 即時関数
/*
const Hello = () => {
  const isReact = true;

  return (
    <p>
      {(() => {
        if (isReact) {
          return "Hello, React!!";
        } else {
          return "Hello";
        }
      })()}
    </p>
  );
};
*/

// 三項演算子
/*
const Hello = () => {
  const isReact = true;

  return <p>{isReact ? "Hello, React!!" : "Hello"}</p>;
};
*/

// 論理積演算子（&&）
/*
const Hello = () => {
  const isReact = true;

  // isReact が true の場合のみ、Hello, React!! を返す
  // isReact が false の場合は何も返さない
  return <p>{isReact && "Hello, React!!"}</p>;
};
*/

// 論理和演算子（||）
const Hello = () => {
  const isReact = false;

  // isReact が false の場合のみ、Hello, React!! を返す
  return <p>{isReact || "Hello, React!!"}</p>;
};

export default function App() {
  return <Hello />;
}
