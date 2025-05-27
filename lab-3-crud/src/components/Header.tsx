import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-20 flex bg-gray-400 items-center justify-between px-4">
      <div>LOGO</div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/blog'>Blogs</Link></li>
          <li><Link to='/'>About</Link></li>
          <li><Link to='/'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;