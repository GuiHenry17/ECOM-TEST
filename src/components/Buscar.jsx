/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import styles from "../styles/filters.module.css"  


export default function Buscar({lista, setLista}) {

  const [originalLista, setOriginalLista] = useState([])
  const [input, setInput] = useState("")

    useEffect(() => {
      if (lista.length > 0 && originalLista.length === 0) {
        setOriginalLista(lista)
      }
    }, [lista, originalLista.length])


    useEffect(() => {
      if (input.trim() === "") {
        setLista([...originalLista])
      } else {
        const listaFiltrada = originalLista.filter((produto) =>
         produto.title.toLowerCase().includes(input.toLowerCase())
        )
        setLista(listaFiltrada)
      }
    }, [input, originalLista, setLista])
    

    const orderAz = () => {
        const listaOrdenada = [...lista].sort((a,b) => a.title.localeCompare(b.title))
        setLista(listaOrdenada)
      }
    
      const orderZa = () => {
        const listaOrdenada = [...lista].sort((a,b) => b.title.localeCompare(a.title))
        setLista(listaOrdenada)
      }
    
      const orderLowerPrice = () => {
        const listaOrdenada = [...lista].sort((a,b) => a.price - b.price)
        setLista(listaOrdenada)
      }
    
      const orderHigherPrice = () => {
        const listaOrdenada = [...lista].sort((a,b) => b.price - a.price)
        setLista(listaOrdenada)
      }

  return (
    <div className={styles.filters}>
      <h1>Filtros</h1>
      <div className={styles.buttonsContainer}>
      <button className={styles.buttons} onClick={() => orderAz()}>A-Z</button>
      <button className={styles.buttons} onClick={() => orderZa()}>Z-A</button>
      <button className={styles.buttons} onClick={() => orderLowerPrice()}>Lower Price</button>
      <button className={styles.buttons} onClick={() => orderHigherPrice()}>Higher Price</button>
      </div>
      <input
      id="busca-input"
      placeholder="Informe o nome do produto"
      onChange={(event) => setInput(event.target.value)}
      />
    </div>
  )
}