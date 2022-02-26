import { Link, NavLink } from 'react-router-dom'
import '../../styles/Footer.css'

function Footer() {
  return (
    <footer className='flex-col flex-align-c'>

      <div className='footer-link-container flex-display-row flex-align-c'>

        <div className='footer-logo width-element-2 txt-center'>
          <img src={require('../../assets/logo/logo_da.png')} alt='logo' />
        </div>

        <div className='footer-link flex-col width-element-2'>
          <NavLink exact to="/" activeClassName="style-nav-active">Accueil</NavLink>
          <NavLink to="/About" activeClassName="style-nav-active">Notre Entreprise</NavLink>
          <NavLink to="/Contact" activeClassName="style-nav-active">Contact</NavLink>
        </div>

      </div>

      <div className='footer-copyright flex-display-row flex-justify-c flex-align-c'>
        <strong class="bold-text-11">© 2021 Dynamic'Assainissement | Tous droits réservés &nbsp;</strong>
      </div>

    </footer>
  )
}

export default Footer