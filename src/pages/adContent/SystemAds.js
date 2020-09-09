import React from "react";
import { Link, useHistory } from "react-router-dom";

import CustomTable from "../../components/table/CustomTable";
import Button from "../../components/button/Button";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Ads",
  links: [
    {
      label: "System Ads",
      url: "/ads/system-ads",
    },
  ],
};

const SystemAds = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    // console.log(JSON.stringify(payload));
  };

  const onActionClicked = (e, payload) => {
    history.push("/ads/system-ads/edit-system-ad");
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="flex justify-end mt-3">
        <div className="intro-y flex justify-center col-span-12 items-center">
          <Link
            to="/ads/system-ads/create-system-ad"
            className="bg-red-700 text-white font-bold py-2 mr-3 px-4 rounded"
            value="Add New System Ads"
          >
            Add New System Ads
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            {
              id: "id",
              label: "ID",
              align: "center",
              minWidth: 100,
              color: (value) => "blue",
            },
            {
              id: "title",
              label: "Title",
              minWidth: 170,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "place",
              label: "Place",
              minWidth: 170,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "date",
              label: "Date",
              minWidth: 170,
              align: "center",
              format: (value) => value.toLocaleString("en-US"),
              color: (value) => "blue",
            },
          ]}
          rows={[
            {
              id: 1,
              title: "Performance",
              place: "Home Page",
              date: "6 May, 2020",
            },
            {
              id: 2,
              title: "Performance",
              place: "Home Page",
              date: "6 May, 2020",
            },
            {
              id: 3,
              title: "Performance",
              place: "Home Page",
              date: "6 May, 2020",
            },
            {
              id: 4,
              title: "Performance",
              place: "Home Page",
              date: "6 May, 2020",
            },
            {
              id: 5,
              title: "Performance",
              place: "Home Page",
              date: "6 May, 2020",
            },
            {
              id: 6,
              title: "Performance",
              place: "Home Page",
              date: "6 May, 2020",
            },
          ]}
          actions={["edit", "delete"]}
          handleActionClick={onActionClicked}
          handleLinkClick={onLinkClicked}
        />
      </div>
    </div>
  );
};

export default SystemAds;
