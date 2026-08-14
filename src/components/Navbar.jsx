import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/taverna">TavernaPeriodica</Link>
        <Link to="/cereal">Cereal Killer</Link>
        <Link to="/pagina3">Página três</Link>
    </nav>
  )
}

export default Navbar
