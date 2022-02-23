import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../../styles/Header.css'


function Header() {

  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className={`${ showLinks ? "show-responsive-nav" : "hide-nav" } `}>

      <div className='nav-logo'>
        <img src={require('../../assets/logo/logo_da.png')} alt='logo' />
      </div>

      <div className='nav-links'>

        <NavLink exact to="/" className="nav-element" activeClassName="style-nav-active">Accueil</NavLink>
        <NavLink to="/About" className="nav-element" activeClassName="style-nav-active">Notre Entreprise</NavLink>
        <NavLink to="/Contact" className="nav-element" activeClassName="style-nav-active">Contact</NavLink>

      </div>

      <button className='nav-burger' onClick={handleShowLinks}>
        <span className='burger-bar'></span>
      </button>

    </nav>
  )
}

export default Header