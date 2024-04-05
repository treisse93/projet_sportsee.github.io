import "../Sass/Layout/MainAbout.scss";
import Cover from "../components/Cover";
import img from "../assets/pictures/AboutCover.png";
import Collapse from "./Collapse";
import { useEffect } from "react";

/**
 * Afficher la page "À propos"
 * @returns {JSX.Element} Le composant MainAbout.
 */
export default function MainAbout() {
  const respectContent =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

  const FiabilityContent =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";

  const ServiceContent =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

  const SecurityContent =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  useEffect(() => {
    document.title = `Kasa - A propos`;
  });

  return (
    <div className="main__about__page">
      <Cover img={img} type="about" />
      <div className="collapse__container">
        {/* Afficher les informations */}
        <Collapse type="large" name="Fiabilité" content={[FiabilityContent]} />
        <Collapse type="large" name="Respect" content={[respectContent]} />
        <Collapse type="large" name="Service" content={[ServiceContent]} />
        <Collapse type="large" name="Sécurité" content={[SecurityContent]} />
      </div>
    </div>
  );
}
