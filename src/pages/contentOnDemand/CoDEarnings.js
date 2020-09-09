import React from "react";
import { useHistory, Link } from "react-router-dom";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Content On Demand",
  links: [
    {
      label: "CoD Earnings",
      url: "/cod/cod-settings",
    },
  ],
};

const CoDEarnings = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
    history.push("/users/list-users/user");
  };

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Total Earnings" />
          <Card cardTitle="116,000" cardBody="Earnings This Month" />
          <Card cardTitle="116,000" cardBody="Average" />
        </div>
        <div style={{ marginTop: "50px" }}>
          <CustomTable
            pagination
            pagerows
            columns={[
              {
                id: "id",
                label: "ID",
                minWidth: 40,
                color: (value) => "blue",
              },
              {
                id: "user",
                label: "User",
                minWidth: 70,
                color: (value) => "blue",
              },
              {
                id: "title",
                label: "Title",
                minWidth: 50,
                color: (value) => "blue",
              },
              {
                id: "commission",
                label: "Commission",
                minWidth: 50,
                align: "center",
                color: (value) => "blue",
              },
              {
                id: "total",
                label: "Total Earned",
                minWidth: 50,
                align: "center",
                color: (value) => "blue",
              },
              {
                id: "watch",
                label: "Actions",
                minWidth: 50,
                align: "center",
                color: (value) => "blue",
              },
            ]}
            rows={[
              {
                id: 1,
                user: "Sarah Doe",
                title: "HipHop Class",
                commission: `${4}%`,
                watch: (
                  <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                    Watch
                  </Link>
                ),
                total: 44,
              },
              {
                id: 2,
                user: "Sarah Doe",
                title: "HipHop Class",
                commission: `${4}%`,
                watch: (
                  <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                    Watch
                  </Link>
                ),
                total: 44,
              },
              {
                id: 3,
                user: "Sarah Doe",
                title: "HipHop Class",
                commission: `${4}%`,
                watch: (
                  <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                    Watch
                  </Link>
                ),
                total: 44,
              },
              {
                id: 4,
                user: "Sarah Doe",
                title: "HipHop Class",
                commission: `${4}%`,
                watch: (
                  <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                    Watch
                  </Link>
                ),
                total: 44,
              },
              {
                id: 5,
                user: "Sarah Doe",
                title: "HipHop Class",
                commission: `${4}%`,
                watch: (
                  <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                    Watch
                  </Link>
                ),
                total: 44,
              },
              {
                id: 6,
                user: "Sarah Doe",
                title: "HipHop Class",
                commission: `${4}%`,
                watch: (
                  <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                    Watch
                  </Link>
                ),
                total: 44,
              },
            ]}
            handleActionClick={onActionClicked}
            handleLinkClick={onLinkClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default CoDEarnings;
