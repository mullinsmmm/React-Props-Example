import "./styles.css";

// AppCastle.js (Parent Component)
import React from "react";
import RoomA from "./RoomA";
import RoomB from "./RoomB";

export default function AppCastle() {
  const knightName = "Sir Lancelot";
  const potionColor = "purple";

  return (
    <div>
      <RoomA knight={knightName} />
      <RoomB potionColor={potionColor} />
    </div>
  );
}
