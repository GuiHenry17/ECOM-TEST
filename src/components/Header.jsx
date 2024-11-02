/* eslint-disable react/prop-types */
import styles from "../styles/header.module.css"  
import { useNavigate } from "react-router-dom"  

export default function Header({ carrinho }) {
  const navigate = useNavigate()

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img src='/logo.png' alt='logo' onClick={() => navigate('/')} style={{cursor: 'pointer' }}/>
        <ul>
          <li onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            Home
          </li>
          <li onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            Produtos
          </li>
          <li onClick={() => navigate('/carrinho', { state: { carrinho } })} style={{ cursor: 'pointer' }}>
            Carrinho
          </li>
        </ul>
      </div>
    </div>
  )  
}
