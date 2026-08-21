
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import './pages.css'
import Cardproduto from '../components/Cardproduto'

function TavernaPeriodica() {
  const{carrinho, setCarrinho, cardapioTaverna} = useContext(GlobalContext)
  return (
    <div className='cont-taverna'>
      <Navbar />
        <h1>taverna Periodica</h1>
        
        <p>A dor em si existe; ela segue a natureza das coisas. Por meio do trabalho e do ódio, o arquiteto explica essas questões dignas — coisas que, por escolha, permanecem desconhecidas na passagem do tempo. Rejeita-se o prazer da verdade por causa da dor? Foge-se e odeiam-se os aspectos mais duros, louvados por alguns?</p>

        <img className='tavernalogo' src='taberna-periodica.png' />
        

      <div className='cardapio'>

      {cardapioTaverna.map( (produto) => (
        <Cardproduto p={produto} key={produto.id}/>
      ) )}

      </div>



    </div>
  )
}

export default TavernaPeriodica;