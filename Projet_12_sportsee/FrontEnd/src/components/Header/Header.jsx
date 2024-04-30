import React from 'react';
import "../../sass/Components/Header/Header.scss";
import Logo from "../Header/Logo";
import Nav from "../Header/Nav";

/**
 * Composant représentant l'en-tête de l'application.
 *
 * @returns {JSX.Element} Composant d'en-tête.
 */


export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}

Header.propTypes = {
  // Aucune prop n'est requise pour ce composant.
};