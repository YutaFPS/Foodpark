
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import './pages.css'

function TavernaPeriodica() {
  const{carrinho, setCarrinho} = useContext(GlobalContext)
  return (
    <div className='cont-taverna'>
      <Navbar />
        <h1>taverna Periodica</h1>
        <img className='tavernalogo' src='taberna-periodica.png'></img>
        <p>A dor em si existe; ela segue a natureza das coisas. Por meio do trabalho e do ódio, o arquiteto explica essas questões dignas — coisas que, por escolha, permanecem desconhecidas na passagem do tempo. Rejeita-se o prazer da verdade por causa da dor? Foge-se e odeiam-se os aspectos mais duros, louvados por alguns?</p>
        <h2>Carrinho de Teste, só teste.</h2>
        <p>Testi testa testes</p>
        <p>{carrinho[0].nome}</p>

    </div>
  )
}

export default TavernaPeriodica