import React from 'react';
import styles from '@/styles/GameBoard.module.css';

export default function Dice({ label, onClick, isSpecial }) {
    return (
        <div className={styles.btnStyle} onClick={onClick}>
            {label}
        </div>
    );
}