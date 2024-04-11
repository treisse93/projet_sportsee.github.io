import React, { useState, useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Rectangle,
    Legend,
  } from "recharts";
  import "../../sass/Components/Dashboard/LineChart.scss";
  import PropTypes from "prop-types";
  
  /**
   * Composant de Tooltip personnalisé pour le graphique en ligne.
   *
   * @param {Object} props - Les propriétés du composant.
   * @param {boolean} props.active - Indique si le tooltip est actif.
   * @param {Array} props.payload - Les données à afficher dans le tooltip.
   * @returns {JSX.Element|null} Le composant Tooltip personnalisé.
   */
  
  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="linechart__tooltip">
          {payload.map((payl, index) => {
            const { value } = payl;
            // affiche la durée
            return (
              <div key={index}>
                <p className="label">{`${value}min`}</p>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  }
  
  CustomTooltip.propTypes = {
    active: PropTypes.bool.isRequired,
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
      })
    ),
  };
  
  /**
   * Composant de Curseur personnalisé pour le graphique en ligne.
   *
   * @param {Object} payload - Les données du curseur.
   * @param {Array} payload.points - Les points du curseur.
   * @returns {JSX.Element} Le composant Curseur personnalisé.
   */
  
  function CustomCursor(payload) {
    const { points } = payload;
    const { x } = points[0];
    return (
      <Rectangle
        className="linechart__rectangle"
        x={x}
        y={0}
        width={500}
        height={500}
        fill="rgba(0, 0, 0, 0.2)"
      />
    );
  }
  
  /**
   * Composant de Légende personnalisée pour le graphique en ligne.
   *
   * @param {Object} props - Les propriétés du composant.
   * @param {Array} props.payload - Les données de la légende.
   * @returns {JSX.Element} Le composant Légende personnalisée.
   */
  
  function CustomLegend({ payload }) {
    return (
      <div className="legend">
        {payload.map(() => {
          return (
            <div key={Math.random()} className="legend__linechart">
              <p className="legendText">{`Durée moyenne des sessions`}</p>
            </div>
          );
        })}
      </div>
    );
  }
  
  CustomLegend.propTypes = {
    payload: PropTypes.array.isRequired,
  };
  
  /**
   * Composant du graphique en ligne.
   *
   * @param {Object} props - Les propriétés du composant.
   * @param {Array} props.data - Les données à afficher dans le graphique.
   * @returns {JSX.Element} Le composant du graphique en ligne.
   */
  
  export default function LineChartComponent({ data }) {
    return (
      <ResponsiveContainer
        className="linechartComponent"
        width="100%"
        height="100%"
        aspect={1}
      >
        <LineChart
          className="linechartComponent__container"
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <XAxis
            type="category"
            dataKey="day"
            stroke="white"
            tickSize={0}
            tick={{ fontSize: "1.5vh", opacity: 0.5 }}
            tickMargin={5}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            // ajuster taille courbe
            type="number"
            dataKey="sessionLength"
            stroke="white"
            hide={true}
            domain={["dataMin-10", "dataMax + 20"]}
          />
          <Line
            className="linechartComponent__container__line"
            dataKey="sessionLength"
            type="natural"
            dot={false}
            strokeWidth={2}
            domain={["dataMin - 5 ", "dataMax + 5"]}
            stroke="url(#grad)"
            cursor={<CustomCursor />}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(255, 255, 255, 0.21)", stopOpacity: 1 }}
              />
              <stop offset="100%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <Legend align="left" verticalAlign="top" content={<CustomLegend />} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  
  LineChartComponent.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ).isRequired,
  };