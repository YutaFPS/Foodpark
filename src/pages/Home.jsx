import { useContext } from 'react'
import './pages.css'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'


function Home() {
    const{ usuario } = useContext(GlobalContext)
    const navigate = useNavigate()

    function testarNavigate(){
        navigate('/taverna')
    }
  return (
    <div className='container-home'>
        <Navbar />
        <h1>FoodMark</h1>
        <img className='img-park' src="./food-park.png" alt="imagem"/>
        {/* <p>Usuário: {usuario}</p>
        <button onClick={testarNavigate}>Testar navigate</button> */}
    </div>
  )
}

export default Home