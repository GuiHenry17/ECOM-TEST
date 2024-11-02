import { useEffect, useState } from "react"  
import ListaProdutos from "../components/ListarProdutos"  
import Header from "../components/Header"  
import Footer from "../components/Footer"  
import { ToastContainer, toast } from "react-toastify"  
import "react-toastify/dist/ReactToastify.css"  
import { useNavigate } from "react-router-dom"  

export default function Home() {
  const [produtos, setProdutos] = useState([])  
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho")  
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []  
  })  
  const navigate = useNavigate()  

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
    const produtoExistente = carrinho.find((item) => item.id === produto.id);

    if (produtoExistente) {
      toast.warn(`Não são permitidas duplicatas de um mesmo produto no carrinho!`);
    } else {
      const novoCarrinho = [...carrinho, produto];
      setCarrinho(novoCarrinho);
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
      toast.info(`Produto "${produto.title}" adicionado ao carrinho!`);
    }
  };

  const irParaCarrinho = () => {
    navigate("/carrinho")  
  }  

  return (
    <>
      <Header irParaCarrinho={irParaCarrinho} />
      <ListaProdutos lista={produtos} funcao={comprar} />
      <Footer />
      <ToastContainer />
    </>
  )  
}
