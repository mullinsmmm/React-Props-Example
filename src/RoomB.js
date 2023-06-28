// RoomB.js (Child Component)
import React from "react";

export default function RoomB(props) {
  const { potionColor } = props;

  return (
    <div>
      <h2>Welcome to Room B</h2>
      <p>The color of the magical potion is {potionColor}.</p>
    </div>
  );
}
