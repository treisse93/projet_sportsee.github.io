import "../Sass/Layout/Carrousel.scss";
import React, { useState } from "react";
import left from "../assets/pictures/leftArrow.png";
import right from "../assets/pictures/rightArrow.png";
import PropTypes from "prop-types";

/**
 * Carrousel d'images.
 * @param {object} props - Les propriétés du composant.
 * @param {string[]} props.pictures - Les URLs des images du carrousel.
 * @param {string} props.title - Le titre du carrousel.
 * @returns {JSX.Element} Le composant Carrousel.
 */
export default function Carrousel({ pictures, title }) {
  const [index, setIndex] = useState(0);
  const length = pictures.length;

  // Image précédente
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  // Numéroter les images
  const counter = `${index + 1}/${length}`;
  // Flèches de navigation seulement si au moins 2 images
  const displayArrow = length <= 1 ? "arrow--inactive" : "arrow--active";
  // Numérotation des images seulement si au moins 2 images
  const displayCounter = length > 1 ? "counter" : "counter--hidden";

  return (
    <div className="carrousel">
      <img
        className="carrousel__cover__img"
        src={pictures[index]}
        alt={title}
      />
      <button
        className={`prev ${displayArrow}`}
        src={left}
        onClick={handlePrevious}
        alt="Previous"
      />
      <div className={displayCounter}>{counter}</div>
      <button
        className={`next ${displayArrow}`}
        src={right}
        onClick={handleNext}
        alt="Next"
      />
    </div>
  );
}

Carrousel.propTypes = {
  pictures: PropTypes.array,
  title: PropTypes.string,
};
