import "../../sass/Components/Dashboard/Barcharts.scss";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        {payload.map((payl) => {
          const { unit, value } = payl;
          const FormatedUnit = unit === "kCal" ? "kCal" : "Kg";
          return (
            <div className="tooltip" key={Math.random()}>
              <p className="label">{`${value}${FormatedUnit}`}</p>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
};

const CustomLegend = ({ payload }) => {
  return (
    <div className="legend">
      <p className="legendTextLeft">Activité quotidienne</p>
      {payload.map((item) => {
        return (
          <div key={Math.random()} className="legendItem">
            <div className="legendIcon">
              <svg width="10" height="10">
                <circle cx="5" cy="5" r="5" fill={item.color} />
              </svg>
            </div>
            <p className="legendTextRight">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
};

CustomLegend.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

CustomLegend.defaultProps = {
  payload: [],
};

BarchartContainer.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default function BarchartContainer({ activities }) {
  return (
    <ResponsiveContainer
      className="barchartsContainer"
      width="100%"
      height="45%"
    >
      <BarChart
        className="barchart"
        width="100%"
        height="100%"
        data={activities}
        barGap={7}
        barSize={10}
        margin={{ top: 20, bottom: 10, left: 40, right: -20 }}
      >
        <CartesianGrid
          horizontal={true}
          vertical={false}
          stroke="#DEDEDE"
          strokeDasharray="2 2"
          className="customCartesianGrid"
        />
        <XAxis dataKey="day" tickSize={0} tickMargin={10} />
        <YAxis
          dataKey="kilogram"
          hide={false}
          yAxisId="kg"
          orientation="right"
          domain={["dataMin - 1", "dataMax + 1"]}
          tickLine={false}
          axisLine={false}
          tickCount={4}
          includeHidden={true}
          allowDecimals={true}
        />
        <YAxis
          dataKey="calories"
          hide={true}
          id="cal"
          tickCount={5}
          yAxisId="cal"
          domain={[0, "dataMax +10"]}
        />

        <Tooltip content={<CustomTooltip className="customTooltip" />} />

        <Legend
          content={<CustomLegend />}
          verticalAlign="top"
          align="right"
          margin={{ top: 10, right: 20, bottom: 50, left: 50 }}
        />
        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          radius={[20, 20, 0, 0]}
          maxBarSize={10}
          fill="black"
          id="kg"
          yAxisId="kg"
          unit="kg"
          margin={{ top: 10 }}
        />
        <Bar
          name="Calories brulées (kCal)"
          dataKey="calories"
          fill="red"
          id="cal"
          yAxisId="cal"
          unit="kCal"
          radius={[20, 20, 0, 0]}
          maxBarSize={10}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}