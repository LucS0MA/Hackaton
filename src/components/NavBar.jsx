import { Link } from "react-router-dom";
import Logo from "../assets/Logo2.png";
import "../components/NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={Logo} className="Logo1" alt="LogoTest" />
        </Link>
        <ul className="head-menu">
          <Link to="/">
            <li> Home </li>
          </Link>
          <Link to="/Characters">
            <li> Products </li>
          </Link>
          <Link to="/Contact">
            <li> Contact </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
