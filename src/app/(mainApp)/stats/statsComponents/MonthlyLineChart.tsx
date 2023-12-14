"use client";
import React, { FC } from "react";
import Chart from "react-google-charts";

const options = {
  curveType: "function",
  backgroundColor: "#fafafe",

  legend: { position: "bottom" },
  pointSize: 4,
  chartArea: { right: 4, width: "90%", height: "60%" },
  series: {
    0: { areaOpacity: 0.5, color: "#F9A109" },
  },
  vAxis: {
    title: "Items",
    textStyle: { color: "#525256", italic: false },
    gridlines: { color: "#d4d4d8", count: -1 },
  },
  hAxis: {
    textStyle: { color: "#3f3f46", italic: false },
  },

  lineWidth: 3,
  animation: {
    startup: true,
    duration: 1000,
    easing: "easy",
  },
};
interface Props {
  data?: any;
}

const MonthlyLineChart: FC<Props> = ({ data }) => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="320px"
      data={data}
      options={options}
      legendToggle
    />
  );
};

export default MonthlyLineChart;
