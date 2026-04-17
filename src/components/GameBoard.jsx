"use client";

import React, { useState } from "react";
import styles from "@/styles/GameBoard.module.css";
import Dice from "./Dice.jsx";
import ScoreBoard from "@/components/Score.jsx";

export default function GameBoard({ players, noti }) {
  const [diceResults, setDiceResults] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [totalTurn, setTotalTurn] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState('');
  const [firstPlayerStatus, setFirstPlayerStatus] = useState(false)

  const randomFirstPlayer = () => {
    setFirstPlayerStatus(true)
    const activePlayers = players.filter((p) => p.name !== "");
    console.log('random first player', activePlayers)
    if (activePlayers.length > 0) {
      const randomIndex = Math.floor(Math.random() * activePlayers.length);
      const firstPlayer = activePlayers[randomIndex];

      setCurrentPlayerIndex(randomIndex);

      noti(`First Player is: ${firstPlayer.name}`);
    }
  };

  const nextTurn = () => {
    setTotalTurn((t) => t + 1)
    const activePlayersCount = players.filter((p) => p.name !== "").length;

    if (activePlayersCount > 0) {
      const nextIndex = (currentPlayerIndex + 1) % activePlayersCount;

      setCurrentPlayerIndex(nextIndex);

      const nextPlayer = players.filter((p) => p.name !== "")[nextIndex];
      noti(`Turn: ${nextPlayer.name}'s turn`);
    }
  };

  // ฟังก์ชันทอยเต๋าตามจำนวน n (Logic จาก script.js)
  const rollDice = (n) => {
    if (!firstPlayerStatus){
        randomFirstPlayer()
        return
    }
    if (n === "+1") {
      setTotalPoints((prev) => prev + 1);
      const message = `+1 Point | Points: ${totalPoints + 1}`;
      noti(message);
      return;
    }

    const newResults = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const num = Math.floor(Math.random() * 6) + 1;
      newResults.push(num);
      sum += num;
    }
    setDiceResults(newResults);
    setTotalPoints(sum);

    const message = `Random: ${n} | Points: ${sum}`;
    noti(message);
  };

  // คำนวณทรัพยากร (Logic จาก function calculate ใน script.js)
  const calculateRes = (divider) => {
    const amount = Math.floor(totalPoints / divider);
    const next = divider - (totalPoints % divider);
    return { amount, next };
  };

  const resources = [
    { name: "Food", img: "/images/food.png", div: 2 },
    { name: "Wood", img: "/images/wood.png", div: 3 },
    { name: "Clay", img: "/images/clay.png", div: 4 },
    { name: "Stone", img: "/images/stone.png", div: 5 },
    { name: "Gold", img: "/images/gold.png", div: 6 },
  ];

  return (
    <div className={styles.container}>
      {/* ฝั่งซ้าย: ปุ่มทอยเต๋า */}
      <div className={styles.leftContainer}>
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <Dice key={num} label={num} onClick={() => rollDice(num)} />
        ))}
        <div className={styles.specialDice} label="+1" onClick={() => rollDice("+1")}>+1</div>

        <div className={styles.turnContainer}>
          <div
            className={styles.payFood}
            onClick={nextTurn}
          >
            Pay Food
          </div>
        </div>
        <div className={styles.turn} onClick={nextTurn}>{players[currentPlayerIndex]?.name}</div>
        <div className={styles.turn} onClick={nextTurn}>{totalTurn}</div>
      </div>

      {/* ฝั่งขวา: แสดงผลทรัพยากรและแต้ม */}
      <div className={styles.rightContainer}>
        <div className={styles.supplyContainer}>
          {resources.map((res) => {
            const { amount, next } = calculateRes(res.div);
            return (
              <div key={res.name} className={styles.resourceItem}>
                <img src={res.img} alt={res.name} />
                <p className={styles.resourceValue}>
                  {amount}
                  <sup>+{next}</sup>
                </p>
              </div>
            );
          })}
        </div>
        <ScoreBoard players={players} noti={noti} />

        <div className={styles.dicePointContainer}>
          <div className={styles.totalPoint}>{totalPoints}</div>
          {/* แสดงแต้มเต๋าแต่ละลูกเหมือนในไฟล์ index.html */}
          {[...Array(7)].map((_, i) => (
            <div key={i} className={styles.dicePoint}>
              {diceResults[i] || ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
