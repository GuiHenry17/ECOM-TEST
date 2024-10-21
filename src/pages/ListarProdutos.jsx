export default function ListaProdutos({lista}){
    return (
        <>
            {lista.map(produto => (
                <div key={produto.id}>
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <p>Preço: {produto.price}</p>
                    <img src={produto.image} alt={produto.title} width={200} />
                </div>
            ))}
        </>
    )
}