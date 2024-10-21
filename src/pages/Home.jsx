import { useEffect, useState } from "react";
import ListaProdutos from "./ListarProdutos";

export default function Home() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        const receberProdutos = async () => {

            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json()
                setProdutos(dados)
            } catch (error) {
                console.log(`Erro encontrado: ${error}`)
            }
        }
        receberProdutos()
    }, [])

    return (
        <ListaProdutos lista={produtos} />
    )

}