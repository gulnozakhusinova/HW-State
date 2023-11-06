import Box4 from "./Box4";

export default function Box3({ text, setText }) {
  function onInput(event) {
    setText(text = event.target.value);
  }
  return (
    <div
      style={{ border: "2px solid yellow", margin: "50px", padding: "50px",backgroundColor:"yellow" }}
    >
      <input type="text" className="input" onInput={onInput} />
      <Box4 text={text} />
    </div>
  );
}
