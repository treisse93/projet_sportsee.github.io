import React from "react";
import "../../sass/Components/Dashboard/KeyDatasComponent.scss";
import PropTypes from "prop-types";

/**
 * Composant représentant les données clés
 * @param {object} props - Les props du composant
 * @param {Array} props.data - Les données clés à afficher
 * @returns {JSX.Element} Composant des données clés
 */
export default function KeyDatasComponent({ data }) {
  if (data !== undefined) {
    return (
      <div className="keyDatasDiv">
        {data.map((keyData) => {
          return (
            <article key={Math.random()} className="keyData">
              <img
                // insertion icone avec attribut selon nom de l'icône
                className="keyDataIcon"
                src={keyData.icon}
                alt={`${keyData.type} icone`}
              />
              <div className="keyDataTextContainer">
                <p className="keyDataValue">
                  {/* Formater la valeur avec la virgule comme séparateur de milliers */}
                  {typeof keyData.value === "string"
                    ? parseFloat(
                        keyData.value.replace(",", ",")
                      ).toLocaleString()
                    : keyData.value.toLocaleString()}
                  {""}
                  {keyData.unit}
                </p>
                <p className="keyDataName">
                  {/* Formater les valeurs */}
                  {keyData.type === "caloriesCount"
                    ? "Calories"
                    : keyData.type === "proteinCount"
                      ? "Protéines"
                      : keyData.type === "carbohydrateCount"
                        ? "Glucides"
                        : "Lipides"}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}

KeyDatasComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    })
  ),
};
