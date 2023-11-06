import Box2 from "./Box2";
import { useState } from "react";

export default function Box1(params) {
  let [text, setText] = useState("");

  function onInput(event) {
    setText(text = event.target.value);
  }

  return (
    <div style={{ border: "2px solid red", margin: "50px", padding: "50px",backgroundColor:"red" }}>
      <input type="text" className="input" onInput={onInput} />
      <Box2 text={text} setText={setText} />
    </div>
  );







}



