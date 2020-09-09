import React from "react";
import { useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Users",
  links: [
    {
      label: "List Agency",
      url: "/users/list-agency",
    },
  ],
};

const ListAgency = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
    history.push("/users/list-agency/agency");
  };

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Agency" />
          <Card cardTitle="116,000" cardBody="Banned" />
          <Card cardTitle="116,000" cardBody="Not Published" />
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            { id: "id", label: "ID", minWidth: 50, color: (value) => "blue" },
            {
              id: "name",
              label: "Group Name",
              minWidth: 100,
              color: (value) => "blue",
              type: "link",
            },
            {
              id: "admin",
              label: "Admin",
              minWidth: 170,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "joined",
              label: "Joined",
              minWidth: 170,
              align: "center",
              format: (value) => value.toLocaleString("en-US"),
              color: (value) => "blue",
            },
            {
              id: "members",
              label: "Members",
              minWidth: 100,
              align: "center",
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
              name: "Lion Dance",
              admin: "Sarah Doe",
              joined: "19/06/2020",
              members: 5,
              status: "Published",
            },
            {
              id: 2,
              name: "Lion Dance",
              admin: "Sarah Doe",
              joined: "19/06/2020",
              members: 5,
              status: "Published",
            },
            {
              id: 3,
              name: "Lion Dance",
              admin: "Sarah Doe",
              joined: "19/06/2020",
              members: 5,
              status: "Not-Published",
            },
            {
              id: 4,
              name: "Lion Dance",
              admin: "Sarah Doe",
              joined: "19/06/2020",
              members: 5,
              status: "Published",
            },
            {
              id: 5,
              name: "Lion Dance",
              admin: "Sarah Doe",
              joined: "19/06/2020",
              members: 5,
              status: "Published",
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

export default ListAgency;
