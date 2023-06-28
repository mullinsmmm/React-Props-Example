// RoomA.js (Child Component)
import React from "react";

export default function RoomA(props) {
  const { knight } = props;

  return (
    <div>
      <h2>Welcome to Room A</h2>
      <p>The brave knight's name is {knight}.</p>
    </div>
  );
}
