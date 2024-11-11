import { useEffect, useState } from "react"  
import Header from "../components/Header"  
import Footer from "../components/Footer"  
import ListarCarrinho from "../components/ListarCarrinho"

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([])  

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho')  
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo))  
    }
  }, [])  

  const removerProduto = (id) => {
    try{
    const novoCarrinho = carrinho.filter((produto) => produto.id !== id)  
    setCarrinho(novoCarrinho)  
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho))
    }catch(error){
      console.error(error)
      localStorage.clear()
    } 
  }  

  return (
    <>
      <Header />
      <ListarCarrinho carrinho={carrinho} removerProduto={removerProduto} />
      <Footer />
    </>
  )  
}
