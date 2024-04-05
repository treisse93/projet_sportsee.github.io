import "../Sass/Components/Cover.scss";
import PropTypes from "prop-types";

/**
 * Afficher une couverture avec un titre et une image.
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.type - Le type de la couverture ("main" ou "about").
 * @param {string} props.title - Le titre de la couverture.
 * @param {string} props.img - L'URL de l'image de la couverture.
 * @returns {JSX.Element} Le composant Cover.
 */
export default function Cover({ type, title, img }) {
  // Affichage conditionnel du titre en fonction du type
  const titleDisplay =
    type === "main" ? <h1 className="title__h1">{title}</h1> : "";

  // Déterminer la classe CSS en fonction du type
  const clsName = type === "about" ? "about__banner" : "main__banner";

  return (
    <section className={clsName}>
      <div className={`${clsName}__title`}>{titleDisplay}</div>
      <img
        className={`${clsName}__cover__img__${type}`}
        src={img}
        alt={title}
      />
    </section>
  );
}

Cover.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
};
