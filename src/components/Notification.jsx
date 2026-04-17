import styles from '@/styles/Notification.module.css';

export default function Notification({ messages }) {
    return (
        <div className={styles.notiContainer}>
            {messages.map((item) => (
                <p key={item.id} className={styles.notiItem}>
                    {item.text}
                </p>
            ))}
        </div>
    );
}