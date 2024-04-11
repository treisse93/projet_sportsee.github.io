import React from 'react';
import "../../sass/Components/Header/Header.scss";
import Logo from "../Header/Logo";
import Nav from "../Header/Nav";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}