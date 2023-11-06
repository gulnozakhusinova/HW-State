import Box3 from "./Box3";

export default function Box2({ text, setText }) {
  function onInput(event) {
    setText(text = event.target.value);
  }

  return (
    <div style={{ border: "2px solid blue", margin: "50px", padding: "50px",backgroundColor:"blue" }}>
      <input type="text" className="input" onInput={onInput} />
      <Box3 text={text} setText={setText} />
    </div>
  );
}



