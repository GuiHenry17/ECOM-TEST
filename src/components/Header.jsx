import styles from "../styles/header.module.css"

export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <h2>MERCADO GRATIS</h2>
                <ul>
                    <li>nav</li>
                    <li>nav</li>
                    <li>nav</li>
                </ul>
            </div>
        </div>
    )
}