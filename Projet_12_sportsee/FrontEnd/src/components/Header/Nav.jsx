import React from "react";
import { NavLink } from "react-router-dom";
import "../../sass/Components/Header/Nav.scss";

/**
 * Composant représentant la barre de navigation de l'application.
 *
 * @returns {JSX.Element} Composant de la barre de navigation.
 */

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink className="navLink" to={"/"}>
        Accueil
      </NavLink>
      <NavLink className="navLink" to={"/profile/:id"}>
        Profil
      </NavLink>
      <NavLink className="navLink" to={"/"}>
        Réglages{" "}
      </NavLink>
      <NavLink className="navLink" to={"/"}>
        Communauté
      </NavLink>
    </nav>
  );
}

Nav.propTypes = {
  // Aucune prop n'est requise pour ce composant.
};
