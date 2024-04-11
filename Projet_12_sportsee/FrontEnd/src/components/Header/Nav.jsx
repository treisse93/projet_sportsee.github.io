import React from 'react';
import { NavLink } from "react-router-dom";
import "../../sass/Components/Header/Nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink className="navLink" to={"/"}>
        Accueil
      </NavLink>
      <NavLink className="navLink" to={"/profile/:id"}>
        Profil
      </NavLink>
      <NavLink className="navLink">Réglages</NavLink>
      <NavLink className="navLink">Communauté</NavLink>
    </nav>
  );
}