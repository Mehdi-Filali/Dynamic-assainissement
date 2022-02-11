import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  )
}

export default Header