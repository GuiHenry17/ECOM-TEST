import styles from "../styles/header.module.css"

export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <img src='/logo.png' alt="logo"/>
                <ul>
                    <li>Home</li>
                    <li>Produtos</li>
                    <li>Carrinho</li>
                </ul>
            </div>
        </div>
    )
}