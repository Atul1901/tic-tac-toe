import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [currentName, setName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleSelect = () => {
    setIsEditing((editing) => !isEditing);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  let playerName = <span className="player-name">{currentName}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    playerName = (
      <input type="text" required value={currentName} onChange={handleName} />
    );
    // buttonCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-name">{symbol}</span>
      </span>
      <button onClick={handleSelect}>{buttonCaption}</button>
    </li>
  );
}
