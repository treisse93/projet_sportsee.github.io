import Tag from "./Tags";
import "../Sass/Layout/Host.scss";
import Rating from "./Rating";
import PropTypes from "prop-types";

/**
 * Afficher les informations d'un hôte.
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre du logement.
 * @param {string} props.location - L'emplacement du logement.
 * @param {string} props.rating - La note de l'hôte.
 * @param {string} props.hostname - Le nom complet de l'hôte.
 * @param {string} props.hostPicture - L'URL de l'image de l'hôte.
 * @param {string[]} props.tags - Les tags associés au logement.
 * @returns {JSX.Element} Le composant Host.
 */

export default function Host({
  title,
  location,
  rating,
  hostname,
  hostPicture,
  tags,
}) {
  // Séparer le nom et le prénom de l'hôte
  const [name, lastName] = hostname.split(" ");

  return (
    <section className="details">
      <div className="details__housing">
        <h1 className="details__housing__title">{title}</h1>
        <p className="details__housing__location">{location}</p>
        <div className="tags__container">
          {/* Afficher les tags */}
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>

      <div className="details__host">
        <div className="details__host__infos">
          <div className="details__host__infos__name">
            <p>{name}</p>
            <p>{lastName}</p>
          </div>
          {/* Afficher l'image de l'hôte */}
          <img
            className="details__host__infos__picture"
            src={hostPicture}
            alt={`portrait de l'hôte ${hostname}`}
          />
        </div>
        {/* Afficher la note/rating */}
        <Rating rate={rating} />
      </div>
    </section>
  );
}
Host.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.string,
  hostname: PropTypes.string,
  hostPicture: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};
