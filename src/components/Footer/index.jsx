import { Link, NavLink } from 'react-router-dom'
import '../../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <div className='footer-link-container'>
        <div className='footer-logo'>
          {/* <img src={require('../../assets/logo/logo_da.png')} alt='logo' /> */}
        </div>

        <div className='footer-link'>
          <NavLink exact to="/" activeClassName="style-nav-active">Accueil</NavLink>
          <NavLink to="/About" activeClassName="style-nav-active">Notre Entreprise</NavLink>
          <NavLink to="/Contact" activeClassName="style-nav-active">Contact</NavLink>
        </div>
      </div>

      <div className='footer-copyright'>
        <strong class="bold-text-11">© 2021 Dynamic'Assainissement | Tous droits réservés &nbsp;</strong>
      </div>  
    </footer>
  )
}

export default Footer