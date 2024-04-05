import Datas from "../datas/DatasControlers.js";
import Collapse from "./Collapse";
import "../Sass/Layout/MainDetailsPage.scss";
import Host from "./Host";
import Carrousel from "./Carrousel";
import PropTypes from "prop-types";
import { useEffect } from "react";

/**
 * Afficher la page détails
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.pageId - L'identifiant de la page de détails.
 * @returns {JSX.Element} Le composant MainDetailsPage.
 */
export default function MainDetailsPage({ pageId }) {
  const item = Datas.find((data) => data.id === pageId);
  const {
    title,
    location,
    rating,
    host,
    description,
    equipments,
    tags,
    pictures,
  } = item;
  const { name, picture } = host;
  useEffect(() => {
    document.title = `Kasa - Locations`;
  });

  return (
    <main className="main__details__page">
      {/* carrousel d'images */}
      <Carrousel title={title} pictures={[...pictures]} />
      {/* informations de l'hôte */}
      <Host
        title={title}
        location={location}
        tags={tags}
        rating={rating}
        hostname={name}
        hostPicture={picture}
      />
      <div className="full__content">
        {/* description et équipements sous forme collapse */}
        <Collapse type="medium" name="Description" content={[description]} />
        <Collapse type="medium" name="Équipements" content={equipments} />
      </div>
    </main>
  );
}

MainDetailsPage.propTypes = {
  pageId: PropTypes.string.isRequired,
};
