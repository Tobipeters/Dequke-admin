import React from "react";
import { useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Content On Demand",
  links: [
    {
      label: "User CoD",
      url: "/cod/user-cod",
    },
  ],
};

const UserCoD = () => {
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
          <Card cardTitle="116,000" cardBody="Total CoD" />
          <Card cardTitle="116,000" cardBody="Total Earned" />
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
                minWidth: 60,
                color: (value) => "blue",
              },
              {
                id: "user",
                label: "User",
                minWidth: 170,
                color: (value) => "blue",
              },
              {
                id: "title",
                label: "Title",
                minWidth: 100,
                color: (value) => "blue",
              },
              {
                id: "price",
                label: "Price",
                minWidth: 100,
                align: "center",
                color: (value) => "blue",
              },
              {
                id: "buyer",
                label: "Buyers",
                minWidth: 100,
                align: "center",
                color: (value) => "blue",
              },
            ]}
            rows={[
              {
                id: 1,
                user: "Sarah Doe",
                title: "HipHop Class",
                price: `N${4000}`,
                buyer: 44,
              },
              {
                id: 2,
                user: "Sarah Doe",
                title: "HipHop Class",
                price: `N${4000}`,
                buyer: 44,
              },
              {
                id: 3,
                user: "Sarah Doe",
                title: "HipHop Class",
                price: `N${4000}`,
                buyer: 44,
              },
              {
                id: 4,
                user: "Sarah Doe",
                title: "HipHop Class",
                price: `N${4000}`,
                buyer: 44,
              },
              {
                id: 5,
                user: "Sarah Doe",
                title: "HipHop Class",
                price: `N${4000}`,
                buyer: 44,
              },
              {
                id: 6,
                user: "Sarah Doe",
                title: "HipHop Class",
                price: `N${4000}`,
                buyer: 44,
              },
              {
                id: 7,
                user: "Sarah Doe",
                title: "HipHop Class",
                price: `N${4000}`,
                buyer: 44,
              },
              {
                id: 8,
                user: "Sarah Doe",
                title: "HipHop Class",
                price: `N${4000}`,
                buyer: 44,
              },
              {
                id: 9,
                user: "Sarah Doe",
                title: "HipHop Class",
                price: `N${4000}`,
                buyer: 44,
              },
            ]}
            actions={["edit", "delete"]}
            handleActionClick={onActionClicked}
            handleLinkClick={onLinkClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCoD;
