import React from "react";
import "./style.css";

export default function KeySample() {
  const [emojis, setEmojis] = React.useState([
    {
      id: 1,
      emoji: "😁"
    },
    {
      id: 2,
      emoji: "😘"
    },
    {
      id: 3,
      emoji: "🤪"
    },
    {
      id: 4,
      emoji: "🤗"
    }
  ]);
  const deleteEmoji = (id) => {
    const updatedEmojis = emojis.filter((item) => item.id !== id);
    setEmojis(updatedEmojis);
  };

  return (
    <div>
      <h1>Rate these emojis!</h1>
      {emojis.map((emoji, i) => (
        <li key={emoji.id} className="emoji-item">
          {emoji.emoji}
          <span>{emoji.id}</span>
          <select>
            <option>Bad</option>
            <option>Okay</option>
            <option>Very good</option>
          </select>
          <button onClick={() => deleteEmoji(emoji.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}
