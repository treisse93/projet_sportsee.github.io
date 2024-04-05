import React from "react";
import "../Sass/Layout/Rating.scss";
import active from "../assets/pictures/activeStar.png";
import inactive from "../assets/pictures/inactiveStar.png";
import PropTypes from "prop-types";

/**
 * Afficher la note sous forme d'étoiles
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.rate - Le taux de notation.
 * @returns {JSX.Element} Le composant Rating.
 */

function Rating({ rate }) {
  let fullstars = [];

  // Afficher les étoiles actives
  for (let i = 0; i <= rate - 1; i += 1) {
    fullstars.push(
      <img key={i} className="active__stars" src={active} alt={rate} />
    );
  }

  // Afficher les étoiles inactives en gris
  if (fullstars.length < 5) {
    const emptyNbr = 5 - rate;

    for (let i = 0; i < emptyNbr; i += 1) {
      fullstars.push(
        <img
          key={i + rate}
          className="inactive__stars"
          src={inactive}
          alt={rate}
        />
      );
    }
  }

  return (
    <div className="rating" alt={`nombre d'étoiles attribuées`}>
      {fullstars}{" "}
    </div>
  );
}

export default Rating;

Rating.propTypes = {
  rate: PropTypes.string,
};
