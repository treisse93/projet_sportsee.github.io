import "../Sass/Components/Nav.scss";
import { NavLink } from "react-router-dom";

/**
 * Afficher la barre de nav
 * @returns {JSX.Element} Le composant Nav.
 */

export default function Nav() {
  /**
   * Fonction pour déterminer la classe de style d'un lien de navigation.
   * @param {object} props - Les propriétés du lien de navigation.
   * @param {boolean} props.isActive - Indique si le lien est actif ou non.
   * @returns {string} La classe de style à appliquer au lien.
   */
  const condition = ({ isActive }) =>
    isActive ? "navLink active" : "navLink inactive";
  return (
    <nav className="container">
      <NavLink className={condition} to="/">
        Accueil
      </NavLink>
      <NavLink className={condition} to="/About">
        A Propos
      </NavLink>
    </nav>
  );
}
