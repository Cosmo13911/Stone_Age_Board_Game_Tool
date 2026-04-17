"use client";
import { useState, useEffect } from 'react';
import styles from '@/styles/Timer.module.css'

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
        return () => clearInterval(interval); // สำคัญ: ต้องเคลียร์ interval เมื่อปิดหน้า
    }, []);

    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    return (
        <div className={styles.timeContainer}>
            <p>Time : <span>{m}:{s.toString().padStart(2, '0')}</span></p>
        </div>
    );
}