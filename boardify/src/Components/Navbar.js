import { Link } from "react-router-dom";

function Navbar() {

    return( <header
        className="flex justify-center items-center text-lg md:text-2xl
      space-x-10 md:space-x-20 bg-black text-white h-16"
      >
        <Link className="hover:text-red-800" to="/">
          Home
        </Link>
        <Link className="hover:text-red-800" to="/about">
          About
        </Link>
      </header>);
    
}

export default Navbar ; 