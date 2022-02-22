import { Link, NavLink } from 'react-router-dom'
import '../../styles/Header.css'

function Header() {

  return (
    <nav>

      <div className='nav-logo'>
        <img src={require('../../assets/logo/logo_da.png')} alt='logo' />
      </div>

      <div className='nav-link'>
        <NavLink exact to="/" activeClassName="style-nav-active">Accueil</NavLink>
        <NavLink to="/About" activeClassName="style-nav-active">Notre Entreprise</NavLink>
        <NavLink to="/Contact" activeClassName="style-nav-active">Contact</NavLink>
      </div>

    </nav>
  )
}

export default Header