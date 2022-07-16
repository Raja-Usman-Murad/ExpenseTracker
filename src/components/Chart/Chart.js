import React from "react";
import "./Chart.css";
import CharBar from "./CharBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((data, i) => {
        return (
          <CharBar
            key={i}
            value={data.value}
            maxValue={totalMaximum}
            label={data.label}
          ></CharBar>
        );
      })}
    </div>
  );
};

export default Chart;
