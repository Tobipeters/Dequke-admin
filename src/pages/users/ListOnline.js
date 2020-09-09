import React from "react";
import { useHistory } from "react-router-dom";
import CustomTable from "../../components/table/CustomTable";
import Card from "../../components/card/Card";

const ListOnline = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
  };

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  return (
    <div>
      <div className="top-bar text-lg text-gray-600 mt-1">List Online</div>
      <hr className="mb-3" />
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Admin" />
          <Card cardTitle="116,000" cardBody="Director" />
          <Card cardTitle="116,000" cardBody="Other Roles" />
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            { id: "id", label: "ID", minWidth: 150, color: (value) => "blue" },
            {
              id: "name",
              label: "Name",
              minWidth: 170,
              color: (value) => "blue",
            },
            {
              id: "username",
              label: "Username",
              minWidth: 150,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "lastLogin",
              label: "Last Login",
              minWidth: 100,
              align: "center",
              format: (value) => value.toLocaleString("en-US"),
              color: (value) => "blue",
            },
            {
              id: "status",
              label: "Status",
              minWidth: 170,
              align: "center",
              color: (value) => (value === "Online" ? "green" : "red"),
            },
          ]}
          rows={[
            {
              id: 1,
              name: "Sarah Doe",
              username: "/sarahdoe",
              lastLogin: "19/08/2020",
              status: "Online",
            },
            {
              id: 2,
              name: "Sarah Doe",
              username: "/sarahdoe",
              lastLogin: "19/08/2020",
              status: "Online",
            },
            {
              id: 3,
              name: "Sarah Doe",
              username: "/sarahdoe",
              lastLogin: "19/08/2020",
              status: "Offline",
            },
            {
              id: 4,
              name: "Sarah Doe",
              username: "/sarahdoe",
              lastLogin: "19/08/2020",
              status: "Online",
            },
            {
              id: 5,
              name: "Sarah Doe",
              username: "/sarahdoe",
              lastLogin: "19/08/2020",
              status: "Online",
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

export default ListOnline;
