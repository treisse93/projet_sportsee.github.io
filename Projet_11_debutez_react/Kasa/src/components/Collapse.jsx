import { useState } from "react";
import arrowUp from "../assets/pictures/ArrowUp.png";
import "../Sass/Components/Collapse.scss";
import PropTypes from "prop-types";
// Afficher un élément pouvant être replié/déplié
/**
 * Composant Collapse permettant d'afficher un élément pouvant être replié/déplié.
 * @param {object} props - Les propriétés du composant.
 * @param {Array} props.content - Le contenu de l'élément.
 * @param {string} props.name - Le nom de l'élément.
 * @param {string} props.type - Le type de l'élément.
 * @returns {JSX.Element} Le composant Collapse.
 */
export default function Collapse({ content, name, type }) {
  const [Toggle, setToggle] = useState({
    state: false,
    direction: "down",
  });

  const toggleState = Toggle.state;

  // Déterminer la direction de la flèche en fonction de l'état de Toggle
  const dir = toggleState === true ? "up" : "down";
  const clsName = dir === "up" ? "arrow--up" : "arrow--down";

  // Déplier/replier l'élément
  const handleCollapse = () => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      state: !prevToggle.state,
    }));
  };

  // Déterminer la classe en fonction du type passé en prop
  let styleType;
  if (type === "large") {
    styleType = "large";
  } else if (type === "medium") {
    styleType = "medium";
  } else {
    styleType = "small";
  }

  return (
    <div className={styleType}>
      <button onClick={handleCollapse} className="collapse__header">
        <p className="collapse__header__name">{name}</p>
        <img className={clsName} src={arrowUp} alt="collapse" />
      </button>
      {Toggle.state && (
        <div className="collapse__header__content">
          {/* Affiche le contenu s'il est déplié */}
          {content.map((element, index) => (
            <p
              key={element.id !== undefined ? element.id : index}
              className="list__item"
            >
              {element}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

Collapse.propTypes = {
  content: PropTypes.array,
  name: PropTypes.string,
  type: PropTypes.string,
};
