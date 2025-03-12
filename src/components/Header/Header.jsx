import "./Header.css";
import { Link } from "react-router-dom";

import Logo from "../../../public/logo.png"

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={Logo} alt="" className="logo"/>
        </Link>
      </header>
   </>
  );
}

export default Header;
