import styles from "../styles/listarProdutos.module.css"

export default function ListaProdutos({lista}){
    return (
        <div className={styles.container}>
            {lista.map(produto => (
                <div key={produto.id} className={styles.produtos}>
                    <img src={produto.image} alt={produto.title} width={200} />
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <h4>{produto.price}</h4>
                    <button>COMPRAR</button>
                </div>
            ))}

        </div>
    )
}