import React, { useState } from "react";
import "./App.css";

const values = [
  { id: 1, item: "マウス" },
  { id: 2, item: "モニター" },
  { id: 3, item: "キーボード" },
];

const CheckBtnItems = ({ onChange, checked }) =>
  values.map((value) => {
    return (
      <label key={value.id}>
        <input
          type="checkbox"
          value={value.item}
          onChange={onChange}
          checked={checked[value.item]}
        />
        {value.item}
      </label>
    );
  });

const InputCheckBox = () => {
  const [checkedValues, setCheckedValues] = useState(
    values.reduce((acc, cur) => {
      acc[cur.item] = false;
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    setCheckedValues({ ...checkedValues, [e.target.value]: e.target.checked });
  };

  // reduce() で checkedValues オブジェクトから、1つずつプロパティを取り出す
  const stateOfCheckedValues = Object.entries(checkedValues).reduce(
    (pre, [key, value]) => {
      // 取り出したプロパティの value が true の場合 key を push して新しい stateOfCheckedValues を作成
      value && pre.push(key);
      return pre;
    },
    // 初期値は空の配列
    []
  );

  return (
    <div className="App">
      <p>
        現在選択されている値：<b>{stateOfCheckedValues.join("、 ")}</b>
      </p>
      <CheckBtnItems onChange={handleChange} checked={checkedValues} />
    </div>
  );
};

export default function App() {
  return <InputCheckBox />;
}
