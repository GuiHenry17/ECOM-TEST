/* eslint-disable react/prop-types */
import styles from "../styles/header.module.css"  
import { useNavigate } from "react-router-dom"  

export default function Header({ carrinho }) {
  const navigate = useNavigate()  

  const irParaCarrinho = () => {
    navigate("/carrinho", { state: { carrinho } })  
  }  

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img src="/logo.png" alt="logo" />
        <ul>
          <li onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Home
          </li>
          <li onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Produtos
          </li>
          <li onClick={irParaCarrinho} style={{ cursor: "pointer" }}>
            Carrinho
          </li>
        </ul>
      </div>
    </div>
  )  
}
