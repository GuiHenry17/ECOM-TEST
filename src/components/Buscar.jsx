/* eslint-disable react/prop-types */
import { useState } from "react"
import styles from "../styles/filters.module.css"  


export default function Buscar({lista, setLista}) {


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
      <button className={styles.buttons} onClick={() => orderAz()}>A-Z</button>
      <button className={styles.buttons} onClick={() => orderZa()}>Z-A</button>
      <button className={styles.buttons} onClick={() => orderLowerPrice()}>LowerPrice</button>
      <button className={styles.buttons} onClick={() => orderHigherPrice()}>HigherPrice</button>
    </div>
    
  )
}
