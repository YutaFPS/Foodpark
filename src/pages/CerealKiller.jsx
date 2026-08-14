import Navbar from '../components/Navbar'
import './pages.css'

function CerealKiller() {
  return (
    <div>
        <div className='cont-cereal'>
            <Navbar />
            <h1>Cereal KIller Cereal Bar</h1>
            <p className='text'>A dor, em si, é uma fonte de sofrimento; é um estado de ser que rejeita a natureza dos prazeres e das dores. Aqui, um senso de liberdade — semelhante ao prazer da conveniência — critica fortemente o indivíduo, pois todas as coisas envolvem certa medida de dor ou afetam aqueles que nelas estão envolvidos.</p>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, expedita excepturi illo culpa harum aliquam fuga accusamus animi dolorum. Non explicabo quae commodi ducimus accusamus beatae facilis veniam recusandae reiciendis!</p>
            <img className="panicologo"  src='panico.webp'></img>
        </div>
    </div>
  )
}

export default CerealKiller
