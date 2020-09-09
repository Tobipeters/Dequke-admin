import React from "react";

import Card from "../../components/card/Card";
import BarChart from "../../components/barChart/BarChart";

const Dashboard = () => {
  const data = [
    ["Year", "Sales"],
    ["2014", 200],
    ["2015", 460],
    ["2016", 660],
    ["2017", 350],
    ["2014", 200],
    ["2015", 460],
    ["2016", 660],
    ["2017", 350],
    // ["2018", 550],
  ];

  const options = {
    backgroundColor: "#fff",
    chart: {
      title: "Dashboard",
      position: "center",
    },
  };
  return (
    <div>
      <div className="top-bar text-lg text-gray-600 mt-1">Dashboard</div>
      <hr className="mb-3" />
      <BarChart data={data} options={options} />
      {/* <Bar data={data} /> */}
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Team" />
          <Card cardTitle="116,000" cardBody="Male" />
          <Card cardTitle="116,000" cardBody="Female" />
          <Card cardTitle="116,000" cardBody="Banned Team" />
          <Card cardTitle="116,000" cardBody="Banned Users" />
          <Card cardTitle="116,000" cardBody="Inactive Users" />
          <Card cardTitle="116,000" cardBody="Online Users" />
          <Card cardTitle="116,000" cardBody="Offline Users" />
          <Card cardTitle="116,000" cardBody="Posts" />
          <Card cardTitle="116,000" cardBody="Comments" />
          <Card cardTitle="116,000" cardBody="Groups" />
          <Card cardTitle="116,000" cardBody="Events" />
          <Card cardTitle="116,000" cardBody="Messages" />
          <Card cardTitle="116,000" cardBody="Notifications" />
          <Card cardTitle="116,000" cardBody="Posts" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
