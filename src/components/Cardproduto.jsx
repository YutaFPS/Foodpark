import React, { useContext } from 'react'
import './Cardproduto.css'
import { GlobalContext } from '../contexts/GlobalContext'


function Cardproduto({p}) {
    
      const{adicionarAoCarrinho} = useContext(GlobalContext)

  return (
    <div className='cont-cardproduto'>
            <h3>{p.nome}</h3>
            <h5>{p.desc}</h5>
            <h4>R${p.preco.toFixed(2).replace('.', ',')}</h4>
            <button className='butao' onClick={() => adicionarAoCarrinho (p.id, "taverna")}> adicionar ao carrinho</button>
    </div>
  )
}

export default Cardproduto