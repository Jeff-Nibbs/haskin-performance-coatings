import './NavBar.css'
import logo from '../assets/haskin-logo.png'

function NavBar() {
  return (
    <nav className="flex justify-between pr-5 text-base ">
      <div className=" w-[20%] md:w-[10%] -ml-2.5">
        <img src={logo} alt="logo" className="h-full w-full aspect-square" />
      </div>
      <div className="flex justify-end gap-7 pt-7 w-[80%]">
        <a className="relative nav-link" href="#">
          ABOUT
        </a>
        <a className="relative nav-link" href="#">
          SERVICES
        </a>
        <a className="relative nav-link" href="#">
          GALLERY
        </a>
        <a className="relative nav-link" href="#">
          CONTACT
        </a>
      </div>
    </nav>
  )
}

export default NavBar
