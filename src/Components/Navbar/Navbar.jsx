import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">EV-olution</div>
        <ul className="nav-menu">
            <li>Início</li>
            <li>Explore</li>
            <li>Sobre</li>
            <li className='nav-contact'>Contato</li>
        </ul>
    </div>
  )
}

export default Navbar
