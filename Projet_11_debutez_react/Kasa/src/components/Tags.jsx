import "../Sass/Layout/Tags.scss";
import PropTypes from "prop-types";

/**
 * Composant Tag représentant une étiquette.
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.tag - Le texte de l'étiquette.
 * @returns {JSX.Element} Le composant Tag.
 */
export default function Tag({ tag }) {
  return (
    <label key={tag} className="tag">
      {tag}
    </label>
  );
}

Tag.propTypes = {
  tag: PropTypes.string,
};
