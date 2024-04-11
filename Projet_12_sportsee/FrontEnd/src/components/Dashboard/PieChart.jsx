import React, { useState, useEffect } from "react";
import { PieChart, ResponsiveContainer, Pie, Label, Legend } from "recharts";
import "../../sass/Components/Dashboard/PieChart.scss";
import PropTypes from "prop-types";

export default function PieChartComponent({ data }) {
  if (!data || !data.length) {
    return <div>No data available</div>;
  }

  const angle = -180 - data[0].value * 3.6;

  function CustomLegend() {
    return <p className="legend">Score</p>;
  }

  function CustomisedLabel() {
    return (
      <>
        <text
          className="labelScore"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="top"
        >
          {data[0].value}%
        </text>
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="bottom"
          className="labelText"
        >
          de votre objectif
        </text>
      </>
    );
  }

  return (
    <ResponsiveContainer className="pieChartComponent">
      <PieChart className="pieChartComponent__radar">
        <Pie
          className="bar"
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="80%"
          innerRadius="70%"
          cornerRadius={10}
          startAngle={-180}
          endAngle={angle}
          fill="red"
        />

        <Pie
          cx="50%"
          cy="50%"
          className="scoringText"
          data={data}
          dataKey="value"
          isAnimationActive={false}
          fill="white"
          outerRadius="69%"
          innerRadius="0%"
        >
          <Label
            content={<CustomisedLabel />}
            position="center"
            width={100}
            fontSize="1.4vh"
          />
        </Pie>
        <Legend
          className="legendPiechart"
          iconSize={0}
          align="left"
          verticalAlign="top"
          content={<CustomLegend />}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

PieChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};