import React from "react";
import { useHistory } from "react-router-dom";
import CustomTable from "../../components/table/CustomTable";
import Card from "../../components/card/Card";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Users",
  links: [
    {
      label: "List Admin",
      url: "/users/list-admin",
    },
  ],
};

const ListAdmin = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
    history.push("/users/list-admin/admin");
  };

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />
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
            { id: "id", label: "ID", minWidth: 50, color: (value) => "blue" },
            {
              id: "name",
              label: "Admin Name",
              minWidth: 170,
              color: (value) => "blue",
              type: "link",
            },
            {
              id: "pageName",
              label: "Group/Page Name",
              minWidth: 170,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "role",
              label: "Role",
              minWidth: 100,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "members",
              label: "Members",
              minWidth: 50,
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
              name: "Sarah Doe",
              pageName: "Lorem Group",
              role: "Super Admin",
              members: 5,
              status: "Published",
            },
            {
              id: 2,
              name: "Sarah Doe",
              pageName: "Lorem Group",
              role: "Super Admin",
              members: 5,
              status: "Published",
            },
            {
              id: 3,
              name: "Sarah Doe",
              pageName: "Lorem Group",
              role: "Super Admin",
              members: 5,
              status: "Published",
            },
            {
              id: 4,
              name: "Sarah Doe",
              pageName: "Lorem Group",
              role: "Super Admin",
              members: 5,
              status: "Published",
            },
            {
              id: 5,
              name: "Sarah Doe",
              pageName: "Lorem Group",
              role: "Super Admin",
              members: 5,
              status: "Published",
            },
            {
              id: 6,
              name: "Sarah Doe",
              pageName: "Lorem Group",
              role: "Super Admin",
              members: 5,
              status: "Published",
            },
            {
              id: 7,
              name: "Sarah Doe",
              pageName: "Lorem Group",
              role: "Super Admin",
              members: 5,
              status: "Published",
            },
            {
              id: 8,
              name: "Sarah Doe",
              pageName: "Lorem Group",
              role: "Super Admin",
              members: 5,
              status: "Published",
            },
            {
              id: 9,
              name: "Sarah Doe",
              pageName: "Lorem Group",
              role: "Super Admin",
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

export default ListAdmin;
