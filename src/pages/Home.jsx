import { useEffect, useState } from "react" 
import ListaProdutos from "../components/ListarProdutos" 
import Header from "../components/Header" 
import Footer from "../components/Footer" 
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Home() {
  const [produtos, setProdutos] = useState([]) 

  useEffect(() => {
    const receberProdutos = async () => {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products") 
        const dados = await resposta.json() 
        setProdutos(dados) 
      } catch (error) {
        console.log(`Erro encontrado: ${error}`) 
      }
    } 
    receberProdutos() 
  }, []) 

  const comprar = (produto) => {
    toast.info(`Produto ID[${produto.id}] adicionado ao carrinho!`)
  } 

  return (
    <>
      <Header />
      <ListaProdutos lista={produtos} funcao={comprar} />
      <Footer />
      <ToastContainer />
    </>
  ) 
}
