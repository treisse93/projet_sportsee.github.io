import React from "react";
import "../../sass/Components/Dashboard/KeyDatasComponent.scss";
import PropTypes from "prop-types";

export default function KeyDatasComponent({ data }) {
  if (data !== undefined) {
    return (
      <div className="keyDatasDiv">
        {data.map((keyData) => {
          return (
            <article key={Math.random()} className="keyData">
              <img
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
                    : keyData.value.toLocaleString()}{" "}
                  {keyData.unit}
                </p>
                <p className="keyDataName">
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
