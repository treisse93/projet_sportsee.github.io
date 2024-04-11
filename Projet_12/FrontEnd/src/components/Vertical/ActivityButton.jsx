import React from "react";
import "../../sass/Components/Vertical/Activity.scss";
import PropTypes from "prop-types"; // Importez PropTypes

export default function ActivityButton({ activity, icon }) {
  return (
    <button className="activityButton">
      <img src={icon} alt={`Logo de l'activité ${activity}`} />
    </button>
  );
}

ActivityButton.propTypes = {
  activity: PropTypes.string.isRequired, // La chaîne de caractères 'activity' est requise
  icon: PropTypes.string.isRequired, // La chaîne de caractères 'icon' est requise
};