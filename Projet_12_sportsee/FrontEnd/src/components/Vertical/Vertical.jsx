import React from "react";
import "../../sass/Components/Vertical/Vertical.scss";
import yoga from "../../assets/yoga.svg";
import musculation from "../../assets/musculation.svg";
import bicycle from "../../assets/bicycle.svg";
import swimming from "../../assets/swimming.svg";
import ActivityButton from "./ActivityButton";
import PropTypes from "prop-types";

/**
 * Composant représentant le volet vertical des activités.
 *
 * @returns {JSX.Element} Le composant du volet vertical des activités.
 */

export default function Vertical() {
  const activities = [
    {
      name: "yoga",
      image: yoga,
    },
    {
      name: "swimming",
      image: swimming,
    },
    {
      name: "bicycle",
      image: bicycle,
    },
    {
      name: "musculation",
      image: musculation,
    },
  ];

  return (
    <aside className="vertical">
      {activities.map((activity) => {
        const { name, image } = activity;
        return (
          <ActivityButton key={Math.random()} activity={name} icon={image} />
        );
      })}
      <p className="copyRights">Copyright, SportSee 2020</p>
    </aside>
  );
}

Vertical.propTypes = {
  /** Les activités à afficher dans le volet vertical */
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      /** Le nom de l'activité */
      name: PropTypes.string.isRequired,
      /** L'URL de l'icône de l'activité */
      image: PropTypes.string.isRequired,
    })
  ),
};
