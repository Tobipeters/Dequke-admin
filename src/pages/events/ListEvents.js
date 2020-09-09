import React from "react";
import { useHistory } from "react-router-dom";
import CustomTable from "../../components/table/CustomTable";
import Card from "../../components/card/Card";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const ListEvents = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
    history.push("/events/list-events/event-details");
  };

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  const data = {
    start: "Events",
    links: [
      {
        label: "List Events",
        url: "/events/list-events",
      },
    ],
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Shows" />
          <Card cardTitle="116,000" cardBody="Performance" />
          <Card cardTitle="116,000" cardBody="Competition" />
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            { id: "id", label: "ID", minWidth: 70, color: (value) => "blue" },
            {
              id: "category",
              label: "Category",
              minWidth: 100,
              color: (value) => "blue",
              type: "link",
            },
            {
              id: "userType",
              label: "User Type",
              minWidth: 100,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "name",
              label: "Name",
              minWidth: 170,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "count",
              label: "Count",
              minWidth: 170,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "link",
              label: "Link",
              minWidth: 170,
              align: "center",
              type: "link",
              color: (value) => "green",
            },
          ]}
          rows={[
            {
              id: 1,
              category: "performance",
              userType: "User",
              name: "Sarah Doe",
              count: "30,450",
              link: "View",
            },
            {
              id: 2,
              category: "performance",
              userType: "User",
              name: "Sarah Doe",
              count: "30,450",
              link: "View",
            },
            {
              id: 3,
              category: "performance",
              userType: "User",
              name: "Sarah Doe",
              count: "30,450",
              link: "View",
            },
            {
              id: 4,
              category: "performance",
              userType: "User",
              name: "Sarah Doe",
              count: "30,450",
              link: "View",
            },
            {
              id: 5,
              category: "performance",
              userType: "User",
              name: "Sarah Doe",
              count: "30,450",
              link: "View",
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

export default ListEvents;
