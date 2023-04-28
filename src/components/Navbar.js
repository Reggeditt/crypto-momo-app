import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const links = [
    {name: 'Home', path: '/home'},
    {name: 'AboutUs', path: '/About'},
    {name: 'ContactUs', path: '/contact'},
  ]
  return (
    <nav>
      <div className="logo">
        <h1>Crypto MoMo</h1>
      </div>
      <ul className="nav-links">
        {
          links.map((link) => <li key={link.name}><NavLink to={link.path}>{link.name}</NavLink> </li>)
        }
      </ul>
    </nav>
  )
};

export default Navbar;
