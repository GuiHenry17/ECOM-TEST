/* eslint-disable react/prop-types */
import styles from "../styles/listarProdutos.module.css"
import Loading from "./Loading"

export default function ListaProdutos({ lista, funcao }) {

  if (lista.length === 0) {
    return (
      <>
      <h1 className={styles.title}>Produtos</h1>
      <Loading/>
      </>
    )
  }

  return (
    
    <>
    <h1 className={styles.title}>Produtos</h1>
      <div className={styles.container}>
        {lista.map((produto) => (
          <div key={produto.id} className={styles.produtos}>
            <img src={produto.image} alt={produto.title} width={200} />
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <h4>R${produto.price}</h4>
            <button onClick={() => funcao(produto)}>Adicionar</button>
          </div>
        ))}
      </div>
    </>
    
  )
}
