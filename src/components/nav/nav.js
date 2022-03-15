import logo from '../../assets/logos/cute-logo.png'
import { Link } from 'react-router-dom'

const NavComponent = () => {
  return (
    <div className="flex flex-row place-content-around items-center border-2 border-b-indigo-500">
      <img className="max-h-24" src={logo} alt="cute logo" />
      <ul className="flex flex-row w-full justify-end items-center h-24">
        <li className="nav-item ">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link to="/saved">Saved</Link>
        </li>
        <li className="nav-item ">Cart</li>

        <li className="nav-item ">Sign In</li>
      </ul>
    </div>
  )
}

export default NavComponent
