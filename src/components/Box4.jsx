import { useEffect, useState } from "react";

export default function Box4({ text }) {
  return (
    <div style={{ border: "2px solid pink", margin: "50px", padding: "50px",backgroundColor:"pink" }}>
      {text}
    </div>
  );
}
