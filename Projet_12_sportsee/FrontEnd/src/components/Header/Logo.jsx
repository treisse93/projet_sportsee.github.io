import React from "react";
import "../../sass/Components/Header/Logo.scss";
import img from "../../assets/logo.svg";

/**
 * Composant représentant le logo de l'application.
 *
 * @returns {JSX.Element} Composant du logo.
 */

export default function Logo() {
  return (
    <div className="logoContainer">
      <img className="logo" src={img} alt="Logo du site SportSee" />
    </div>
  );
}

Logo.propTypes = {
  // Aucune prop n'est requise pour ce composant.
};