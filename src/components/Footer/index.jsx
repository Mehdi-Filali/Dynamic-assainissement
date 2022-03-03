import { Link, NavLink } from 'react-router-dom'
import '../../styles/Footer.css'
import BtnCall from '../BtnCall'

function Footer() {
  return (
    <footer className='flex-col flex-align-c'>

      <div className='footer-link-container flex-display-row flex-align-c'>

        <div className='footer-logo width-element-3 txt-center'>
          <img src={require('../../assets/logo/logo_da.png')} alt='logo' />
        </div>

        <div className='footer-link flex-col width-element-3'>
          <NavLink exact to="/" activeClassName="style-nav-active">Accueil</NavLink>
          <NavLink to="/About" activeClassName="style-nav-active">Assainissement</NavLink>
          <NavLink to="/Contact" activeClassName="style-nav-active">Contactez-nous</NavLink>
          <NavLink to="/Legal-mentions" activeClassName="style-nav-active">Mentions Légales</NavLink>
          <NavLink to="/Confidential" activeClassName="style-nav-active">Politique de confidentialité</NavLink>
        </div>

        <div className='responsive-btn'>
          <BtnCall />
        </div>

      </div>

      <div className='footer-copyright flex-display-row flex-justify-c flex-align-c'>
        <strong class="bold-text-11">© 2021 Dynamic'Assainissement | Tous droits réservés &nbsp;</strong>
      </div>

    </footer>
  )
}

export default Footer