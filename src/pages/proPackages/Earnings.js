import React from "react";
import Card from "../../components/card/Card";
import BarChart from "../../components/barChart/BarChart";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const Earnings = () => {
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
  ];

  const options = {
    backgroundColor: "#fff",
    chart: {
      title: "Monthly Average",
      position: "center",
    },
  };

  const datas = {
    start: "Pro Packages",
    links: [
      {
        label: "Earnings",
        url: "/package/earnings",
      },
    ],
  };

  return (
    <div>
      <CustomBreadcrumb data={datas} />
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-6 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Total Earnings" />
          <Card cardTitle="116,000" cardBody="This Month Earnings" />
        </div>
      </div>
      <BarChart data={data} options={options} />
    </div>
  );
};

export default Earnings;
