import { Link } from "react-router-dom";
import "../Sass/Components/Card.scss";
import PropTypes from "prop-types";

/**
 * Afficher une carte avec un titre et une image.
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre de la carte.
 * @param {string} props.img - L'URL de l'image de la carte.
 * @param {string} props.id - L'identifiant de la carte.
 * @returns {JSX.Element} Le composant Card.
 */

export default function Card({ title, img, id }) {
  return (
    // Créer le lien vers la page de détails

    <Link to={`/Details/${id}`} id={id} className="container__Card">
      <img className="cover__Card" src={img} alt={title} />
      <h3 className="title__Card">{title}</h3>
    </Link>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
