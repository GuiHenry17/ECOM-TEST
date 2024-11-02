/* eslint-disable react/prop-types */
import styles from "../styles/listarProdutos.module.css" 

export default function ListarCarrinho({ carrinho, removerProduto }) {

  return (
    <>
      <h1 className={styles.title}>Carrinho</h1>
      <div className={styles.container}>
        {carrinho.length > 0 ? (
          carrinho
            .filter((produto, index, carrinho) => carrinho.findIndex(p => p.id === produto.id) === index)
            .map((produto) => (
              <div key={produto.id} className={styles.produtos}>
                <img src={produto.image} alt={produto.title} width={50} />
                <h2>{produto.title}</h2>
                <h4>R${produto.price}</h4>
                <button className='remove' style={{backgroundColor: '#dd3954'}} onClick={() => removerProduto(produto.id)}>Remover</button>
              </div>
            ))
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </div>
    </>
  ) 
}
