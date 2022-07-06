import styles from '../components/headerTask.module.css'

export function HeaderTask( props) {
    return (
        <div className={styles.div}>
        <header className={styles.header}>
            <span id={styles.span}>Tabelas criadas<strong>{props.count.length}</strong></span>
            <span>Concluidas<strong>{props.count.length}</strong></span>
        </header>
        </div>
    )
}