import React from "react";
import "../../sass/Components/Header/Logo.scss";
import img from "../../assets/logo.svg";

export default function Logo() {
  return (
    <div className="logoContainer">
      <img className="logo" src={img} alt="Logo du site SportSee" />
    </div>
  );
}
