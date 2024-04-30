/**
 * Displays a radar chart using the provided data.
 * @param {Object} props - The component props.
 * @param {Object[]} props.data - An array of objects containing the data for the radar chart.
 * @param {string} props.data[].kind - A string representing the kind of data.
 * @param {Object[]} props.data[].data - An array of objects containing the data values.
 * @param {number} props.data[].data.value - A number representing the data value.
 */

import React from "react";
import "../../sass/Components/Dashboard/Radarchart.scss";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function RadarCharts({ data }) {
  return (
    <ResponsiveContainer
      className="radarContainer"
      width="100%"
      height="100%"
      aspect={1}
    >
      <RadarChart
        className="radarChart"
        cx="50%"
        cy="50%"
        data={data}
        outerRadius="65%"
      >
        <PolarGrid className="axis" gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          domain={["datamin", "datamax"]}
          tickLine={false}
          tickSize={0}
        />
        <Radar dataKey="data" fill="red" dot={false} fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

RadarCharts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ),
};