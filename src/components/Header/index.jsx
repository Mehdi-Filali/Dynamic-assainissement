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

      <div className='nav-container'>

        <div className='nav-logo'>
          <img src={require('../../assets/logo/logo_da.png')} alt='logo' />
        </div>

        <div className='nav-links'>

          <NavLink exact to="/" activeClassName="style-nav-active" onClick={handleShowLinks}>Accueil</NavLink>
          <NavLink to="/About" activeClassName="style-nav-active" onClick={handleShowLinks}>Notre Entreprise</NavLink>
          <NavLink to="/Contact"  activeClassName="style-nav-active" onClick={handleShowLinks}>Contact</NavLink>

        </div>

        <button className='nav-burger' onClick={handleShowLinks}>
          <span className='burger-bar'></span>
        </button>
        
      </div>

    </nav>
  )
}

export default Header