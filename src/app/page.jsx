"use client";

import { useState } from "react";
import Form from "@/components/Form.jsx";
import GameBoard from "@/components/GameBoard.jsx";
import Timer from "@/components/Timer.jsx";
import Notification from "@/components/Notification.jsx";

import styles from "@/styles/page.module.css";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [endGameStatus, setEndGameStatus] = useState(false);

  const addNoti = (text) => {
    const id = Date.now();
    setNotifications((prev) => [{ id, text }, ...prev]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5000);
  };

  const handleStartGame = (playerData) => {
    setPlayers(playerData);
    setGameStarted(true);
  };

  return (
    <main>
      <Notification messages={notifications} />

      {!gameStarted ? (
        <Form onStartGame={handleStartGame} />
      ) : (
        <div className="game-layout">
                  <>
          {!endGameStatus && (
            <>
              <GameBoard players={players} noti={addNoti} />
              <Timer></Timer>
            </>
          )}
                        <button
                className={styles.calculateBtn}
                onClick={() => setEndGameStatus(!endGameStatus)}
              >
                {endGameStatus ? 'Back' : 'Calculate Score'}
              </button>

        </>

        </div>
      )}
    </main>
  );
}
