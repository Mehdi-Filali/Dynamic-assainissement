import { Link } from 'react-router-dom'
import '../../styles/Header.css'

function Header() {
  return (
    <nav>

      <div className='nav-logo'>
        <img src={require('../../assets/logo/logo_da.png')} alt='logo' />
      </div>

      <div className='nav-link'>
        <Link to="/">Accueil</Link>
        <Link to="/About">Notre Entreprise</Link>
        <Link to="/Contact">Contact</Link>
      </div>

    </nav>
  )
}

export default Header