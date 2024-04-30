import React from "react";
import "../../sass/Layout/MainProfilePage.scss";
import Vertical from "../../components/Vertical/Vertical";
import Dashboard from "../../components/Dashboard/Dashboard";
import PropTypes from "prop-types";

/**
 * Composant représentant la section principale de la page de profil
 * @param {object} props - Les props du composant
 * @param {string} props.id - L'identifiant de l'utilisateur
 * @returns {JSX.Element} Composant de la section principale de la page de profil
 */

export default function MainProfile({ id }) {
  return (
    <section className="mainSection">
      <Vertical />
      <Dashboard id={id} />
    </section>
  );
}

MainProfile.propTypes = {
  id: PropTypes.string.isRequired,
};

MainProfile.propTypes = {
  /**
   * L'identifiant de l'utilisateur
   */
  id: PropTypes.string.isRequired,
};
