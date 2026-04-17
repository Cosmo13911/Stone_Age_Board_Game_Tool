"use client";
import { useState } from "react";
import styles from "@/styles/Form.module.css";

export default function Form({ onStartGame }) {
  const [players, addPlayers] = useState([
    { name: "", color: "" },
    { name: "", color: "" },
    { name: "", color: "" },
    { name: "", color: "" },
  ]);

  const addName = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index].name = value;
    addPlayers(newPlayers);
  };

  const addColor = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index].color = value;
    addPlayers(newPlayers);
  };

  const start = () => {
    const activePlayersCount = players.filter((p) => p.name !== "").length;
    const activeColor = players.filter((p) => p.color !== "").length;
    const activePlayers = players.filter((p) => p.name !== "");
    if (activeColor < activePlayersCount) {
      alert("Please Select Player Color!!");
      return;
    } 
    else if (activePlayersCount < 2) {
      alert("Please Enter more than 1 Player!");
      return;
    }
    if (onStartGame) {
      onStartGame(activePlayers);
      console.log("on start game");
      console.log("in Form player", activePlayers);
    }
    console.log("Starting game with:", players);
  };

  return (
    <div className={styles.container}>
      {players.map((player, index) => (
        <div key={index}>
          <h1 className={styles.textForm}>
            {player.name || `Player ${index + 1}`}
          </h1>
          <div className={styles.playerRow}>
            <input
              type="text"
              className={styles.inputName}
              placeholder={`input player${index + 1} name`}
              value={player.name}
              onChange={(e) => addName(index, e.target.value)}
            />
            <select
              className={styles.colorDropdown}
              value={player.color}
              onChange={(e) => addColor(index, e.target.value)}
              style={{ backgroundColor: player.color }}
            >
              <option value="" disabled>
                color
              </option>
              <option value="red">🔴</option>
              <option value="blue">🔵</option>
              <option value="yellow">🟡</option>
              <option value="green">🟢</option>
            </select>
          </div>
        </div>
      ))}
      <button className={styles.startBtn} onClick={start}>
        START GAME
      </button>
    </div>
  );
}
