import React from "react";
import { Chart } from "react-google-charts";

export default function BarChart({ data, options }) {
  return (
    <div className="intro-y box py-6 px-16 sm:py-10 mt-5">
      <Chart height={"500px"} chartType="Bar" data={data} options={options} />
    </div>
  );
}
