import React, { useState, useEffect } from "react";
import "../sass/Components//WelcomeContainer.scss";
import PropTypes from "prop-types";

/**
 * Composant représentant un conteneur de bienvenue
 * @param {object} props - Les props du composant
 * @param {string} props.firstName - Le prénom de l'utilisateur
 * @returns {JSX.Element} Composant du conteneur de bienvenue
 */
export default function WelcomeContainer({ firstName }) {
  return (
    <div className="welcomeContainer">
      <div className="welcomeContainer__Msg">
        <p className="welcomeContainer__hello">
          Bonjour <span className="firstName">{firstName}</span>
        </p>
        <p className="welcomeContainer__congratulations">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
    </div>
  );
}

WelcomeContainer.propTypes = {
  firstName: PropTypes.string.isRequired,
};