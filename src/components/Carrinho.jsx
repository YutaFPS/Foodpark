import React from 'react'
import Navbar from './Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'

function Carrinho() {
    const {carrinho} = useContext(GlobalContext)
  return (
    
    <div className='cont-carrinho'>
        <Navbar />
        <h1>Carrinho</h1>
        <p>prudutos existem aqui</p>
        <p>{carrinho.length}</p>
        {carrinho.map((item) => (
            <div className='item-carrinho'>
                <p>{item.produto.nome} qtd: {item.quantidade} R$ {item.produto.preco.toFixed(2)}
                </p>
            </div>

        ))}
    </div>
  )
}

export default Carrinho