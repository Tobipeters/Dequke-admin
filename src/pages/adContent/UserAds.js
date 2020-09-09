import React from "react";
import { useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Ads",
  links: [
    {
      label: "User Ads",
      url: "/ads/user-ads",
    },
  ],
};

const UserAds = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    // console.log(JSON.stringify(payload));
    // history.push("/users/list-users/user");
  };

  const onActionClicked = (e, payload) => {
    history.push("/ads/user-ads/edit-user-ads");
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />{" "}
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Total Ads" />
          <Card cardTitle="116,000" cardBody="Ads Running" />
          <Card cardTitle="116,000" cardBody="Inactive Ads" />
        </div>
        <div className="mt-10">
          <CustomTable
            pagination
            pagerows
            columns={[
              {
                id: "id",
                label: "ID",
                minWidth: 60,
                color: (value) => "blue",
              },
              {
                id: "title",
                label: "Title",
                minWidth: 170,
                color: (value) => "blue",
              },
              {
                id: "by",
                label: "By",
                minWidth: 100,
                color: (value) => "blue",
              },
              {
                id: "adtype",
                label: "Ad Type",
                minWidth: 100,
                color: (value) => "blue",
              },
              {
                id: "budget",
                label: "Budget",
                minWidth: 100,
                align: "center",
                color: (value) => "blue",
              },
              {
                id: "status",
                label: "Status",
                minWidth: 100,
                align: "center",
                color: (value) => (value.startsWith("Not") ? "red" : "green"),
              },
            ]}
            rows={[
              {
                id: 1,
                title: "Performance",
                by: "Mark Spenser",
                adtype: "Post",
                budget: `N${4000}`,
                status: "Active",
              },
              {
                id: 2,
                title: "Performance",
                adtype: "Post",
                by: "Mark Spenser",
                budget: `N${4000}`,
                status: "Not Active",
              },
              {
                id: 3,
                title: "Performance",
                adtype: "Post",
                by: "Mark Spenser",
                budget: `N${4000}`,
                status: "Active",
              },
              {
                id: 4,
                title: "Performance",
                adtype: "Post",
                by: "Mark Spenser",
                budget: `N${4000}`,
                status: "Active",
              },
              {
                id: 5,
                title: "Performance",
                adtype: "Post",
                by: "Mark Spenser",
                budget: `N${4000}`,
                status: "Active",
              },
              {
                id: 6,
                title: "Performance",
                adtype: "Post",
                by: "Mark Spenser",
                budget: `N${4000}`,
                status: "Active",
              },
              {
                id: 7,
                title: "Performance",
                adtype: "Post",
                by: "Mark Spenser",
                budget: `N${4000}`,
                status: "Active",
              },
              {
                id: 8,
                title: "Performance",
                adtype: "Post",
                by: "Mark Spenser",
                budget: `N${4000}`,
                status: "Active",
              },
              {
                id: 9,
                title: "Performance",
                adtype: "Post",
                by: "Mark Spenser",
                budget: `N${4000}`,
                status: "Active",
              },
            ]}
            actions={["edit", "delete", "play"]}
            handleActionClick={onActionClicked}
            handleLinkClick={onLinkClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default UserAds;
