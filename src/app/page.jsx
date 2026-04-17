"use client";

import { useState } from "react";
import Form from "@/components/Form.jsx";
import GameBoard from "@/components/GameBoard.jsx";
import Timer from '@/components/Timer.jsx'
import Notification from "@/components/Notification.jsx";

import "@/styles/globals.css";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState([]);
  const [notifications, setNotifications] = useState([]);

    const addNoti = (text) => {
        const id = Date.now();
        setNotifications(prev => [{ id, text }, ...prev]);

        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        }, 3000);
    };

  const handleStartGame = (playerData) => {
    setPlayers(playerData);
    setGameStarted(true);
  };

  return (
    <main>
      <Notification messages={notifications} />

      {!gameStarted ? (
        // <Form onStartGame={handleStartGame} />
        <GameBoard players={players} noti={addNoti}/>
      ) : (
        <div className="game-layout">
          <Timer></Timer>
        </div>
      )}
    </main>
  );
}
