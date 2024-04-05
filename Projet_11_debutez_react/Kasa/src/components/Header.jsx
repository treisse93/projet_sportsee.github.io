import Nav from "./Nav";
import "../Sass/Components/Header.scss";
import img from "../assets/Logos/HeaderLogo.png";
import { Link } from "react-router-dom";

/**
 * Afficher le header
 * @returns {JSX.Element} Le composant Header.
 */
export default function Header() {
  return (
    <header className="container">
      <Link className="logo__container" to="/">
        {" "}
        <img className="logo" src={img} alt="Logo du site Kaza"></img>
      </Link>
      <Nav />
    </header>
  );
}
