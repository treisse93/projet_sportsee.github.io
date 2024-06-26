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

/**
 * Composant représentant le tableau de bord
 * @param {object} props - Les props du composant
 * @param {string} props.id - L'identifiant de l'utilisateur
 * @returns {JSX.Element} Composant du tableau de bord
 */
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

    console.log(formatedKeyData);

    if (formatedKeyData.length > 0) {
      const firstDataItem = formatedKeyData[0];
      firstDataItem.value = parseFloat(firstDataItem.value.replace(",", ""));
    }

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
            <KeyDatasComponent data={formatedKeyData} />
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
