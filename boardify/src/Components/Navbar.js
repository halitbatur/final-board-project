import { Link } from "react-router-dom";
import logo from '../bored-logo.png'

function Navbar() {

  return (
    <header
      className="flex justify-between px-10 items-center text-xs md:text-base
      space-x-10 md:space-x-36 bg-[#262626] text-[#ADADAD] h-16 transition"
    >
      <div className="logo container w-28 pt-2">
        <img src={logo} alt="" className="">
        </img>
      </div>
      <div className="links flex gap-8  font-bold pr-10">
        <Link className="hover:text-[#E6E6E6]  transition" to="/">
          Home
        </Link>
        <Link className="hover:text-[#E6E6E6] transition" to="/finished">
          Finished Tasks
        </Link>
        <Link className="hover:text-[#E6E6E6]  transition" to="/about">
          About
        </Link>
      </div>
    </header>
  );

}

export default Navbar;
