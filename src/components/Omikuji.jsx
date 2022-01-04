import React, { useState } from "react";

function Omikuji() {
  const [disp, setDisp] = useState("");
  const clickOmikujiStart = () => {
    //配列
    const arr = ["大吉", "吉", "小吉", "凶", "大凶"];
    //ランダム
    // var min = 0;
    // var max = 4;
    //const omikujiNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    var index = Math.floor(Math.random() * arr.length);
    setDisp(arr[index]);

    //結果
  };
  return (
    <div style={{ textAlign: "center" }}>
      <p>{disp}</p>
      <button onClick={clickOmikujiStart}>おみくじをひく</button>
    </div>
  );
}

export default Omikuji;
