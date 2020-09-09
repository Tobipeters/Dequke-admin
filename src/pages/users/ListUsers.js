import React from "react";
import { useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Users",
  links: [
    {
      label: "List Users",
      url: "/users/list-users",
    },
  ],
};

// We can perform some actons base on type of action selected

const ListUsers = () => {
  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };

  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
    history.push("/users/list-users/user");
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="col-span-12 mt-8">
        <div className="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Users" />
          <Card cardTitle="116,000" cardBody="Banned" />
          <Card cardTitle="116,000" cardBody="Not Activated" />
        </div>
      </div>
      <div className="mt-20">
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
              type: "link",
            },
            {
              id: "username",
              label: "Username",
              minWidth: 150,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "joined",
              label: "Joined",
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
              color: (value) =>
                value.startsWith("Not")
                  ? "red"
                  : value.startsWith("Waiting")
                  ? "black"
                  : "green",
            },
          ]}
          rows={[
            {
              id: 1,
              name: "Sarah Doe",
              username: "/sarahdoe",
              joined: "19/06/2020",
              status: "Activated",
            },
            {
              id: 2,
              name: "Sarah Doe",
              username: "/sarahdoe",
              joined: "19/06/2020",
              status: "Not-Activated",
            },
            {
              id: 3,
              name: "Sarah Doe",
              username: "/sarahdoe",
              joined: "19/06/2020",
              status: "Activated",
            },
            {
              id: 4,
              name: "Sarah Doe",
              username: "/sarahdoe",
              joined: "19/06/2020",
              status: "Not-Activated",
            },
            {
              id: 5,
              name: "Sarah Doe",
              username: "/sarahdoe",
              joined: "19/06/2020",
              status: "Not-Activated",
            },
            {
              id: 6,
              name: "Sarah Doe",
              username: "/sarahdoe",
              joined: "19/06/2020",
              status: "Activated",
            },
            {
              id: 7,
              name: "Sarah Doe",
              username: "/sarahdoe",
              joined: "19/06/2020",
              status: "Activated",
            },
            {
              id: 8,
              name: "Sarah Doe",
              username: "/sarahdoe",
              joined: "19/06/2020",
              status: "Activated",
            },
            {
              id: 9,
              name: "Sarah Doe",
              username: "/sarahdoe",
              joined: "19/06/2020",
              status: "Activated",
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

export default ListUsers;
