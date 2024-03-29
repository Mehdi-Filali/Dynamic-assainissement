import { NavLink } from "react-router-dom";
import "../../styles/Footer.css";
import BtnCall from "../BtnCall";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="flex-col flex-align-c">
      <div className="footer-link-container flex-display-row flex-align-c">
        <div className="footer-logo width-element-3 txt-center">
          <img src={require("../../assets/logo/logo-footer.png")} alt="logo" />
        </div>

        <div className="footer-link flex-display-row flex-space-b">
          <div className="flex-col width-element-2">
            <NavLink exact to="/" activeClassName="style-nav-active">
              Accueil
            </NavLink>
            <NavLink to="/About" activeClassName="style-nav-active">
              Assainissement
            </NavLink>
            <NavLink to="/Contact" activeClassName="style-nav-active">
              Contactez-nous
            </NavLink>
          </div>

          <div className="flex-col width-element-2">
            <NavLink to="/Legal-mentions" activeClassName="style-nav-active">
              Mentions Légales
            </NavLink>
            <NavLink to="/Confidential" activeClassName="style-nav-active">
              Politique de confidentialité
            </NavLink>
          </div>
        </div>

        <div className="responsive-btn">
          <BtnCall />
        </div>
      </div>

      <div className="footer-copyright flex-display-row flex-justify-c flex-align-c">
        <strong class="bold-text-11">
          © {date} Dynamic Assainissement | Tous droits réservés &nbsp;
        </strong>
      </div>
    </footer>
  );
}

export default Footer;
