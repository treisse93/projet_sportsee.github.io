import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import getProfile from "../../services/profileRequest.js";
import WelcomeContainer from "../WelcomeContainer.jsx";
import KeyDatasComponent from "./KeyDatasComponent.jsx";
import BarChartContainer from "./Barcharts.jsx";
import LineChartComponent from "./LineChart.jsx";
import RadarCharts from "./Radarchart.jsx";
import PieChartComponent from "./PieChart.jsx";
import { ResponsiveContainer } from "recharts";
import "../../sass/Components/Dashboard/Dashboard.scss";

export default function Dashboard({ id }) {
  const type = "mock";
  const [profil, setProfil] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProfile(id, type);
        console.log(response);
        setProfil(response);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération du profil :",
          error
        );
      }
    }
    fetchData();
  }, [id, type]);

  if (profil && profil.firstName) {
    const {
      sessionsAverage,
      sessionsTracking,
      score,
      firstName,
      formatedActivities,
      formatedKeyData,
    } = profil;

    // Modifier la propriété formatedKeyData pour utiliser des nombres au lieu de chaînes de caractères
    const updatedFormatedKeyData = formatedKeyData.map((item) => ({
      ...item,
      value: parseFloat(item.value), // Convertir la valeur en nombre
    }));

    // Créer un nouvel objet profil avec la propriété formatedKeyData mise à jour
    const updatedProfil = {
      ...profil,
      formatedKeyData: updatedFormatedKeyData,
    };

    return (
      <div className="dashboardContainer">
        <WelcomeContainer firstName={firstName} dataType={type} />
        <section className="viewStats">
          <div className="viewStatsGraphs">
            {sessionsTracking && (
              <BarChartContainer activities={sessionsTracking} />
            )}
            <div className="viewStatsGraphsDown">
              <LineChartComponent data={sessionsAverage} />

              <RadarCharts data={formatedActivities} />
              <PieChartComponent data={score} />
            </div>
          </div>
          <ResponsiveContainer
            className="keyDatasContainer"
            width="30%"
            height="100%"
          >
            <KeyDatasComponent data={updatedFormatedKeyData} />
          </ResponsiveContainer>
        </section>
      </div>
    );
  } else {
    return (
      <p className="loading">
        Une erreur est survenue, les données d&apos;utilisation sont
        inacessibles
      </p>
    );
  }
}

Dashboard.propTypes = {
  id: PropTypes.string.isRequired, // id doit être un nombre et requis
};
