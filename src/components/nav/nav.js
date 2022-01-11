import logo from '../../assets/logos/cute-logo.png'

const NavComponent = () => {
  return (
    <div className="flex flex-row place-content-around items-center">
      <img className="max-h-24" src={logo} alt="cute logo" />
      <ul className="flex flex-row w-full justify-end items-center p-4 ">
        <li className="mr-4">Home</li>
        <li className="mr-4">Saved</li>
        <li className="mr-4">Cart</li>

        <li className="mr-4">Sign In</li>
      </ul>
    </div>
  )
}

export default NavComponent
