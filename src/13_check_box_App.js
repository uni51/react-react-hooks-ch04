import React, { useState } from "react";
import "./App.css";

const InputCheckBox = () => {
  const [checkedValues, setCheckedValues] = useState({
    マウス: false,
    モニター: false,
    キーボード: false,
  });

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

      <label>
        <input
          type="checkbox"
          value="マウス"
          onChange={handleChange}
          checked={checkedValues["マウス"]}
        />
        マウス
      </label>
      <label>
        <input
          type="checkbox"
          value="モニター"
          onChange={handleChange}
          checked={checkedValues["モニター"]}
        />
        モニター
      </label>
      <label>
        <input
          type="checkbox"
          value="キーボード"
          onChange={handleChange}
          checked={checkedValues["キーボード"]}
        />
        キーボード
      </label>
    </div>
  );
};

export default function App() {
  return <InputCheckBox />;
}
