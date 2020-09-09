import React from "react";
import { useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const ListSubscribers = () => {
  const data = {
    start: "Pro Packages",
    links: [
      {
        label: "List Subscribers",
        url: "/package/subscribers",
      },
    ],
  };

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
        <div class="grid grid-cols-6 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Total Subscribers" />
          <Card cardTitle="116,000" cardBody="This Month Subscribers" />
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
                minWidth: 100,
                color: (value) => "blue",
              },
              {
                id: "author",
                label: "Author",
                minWidth: 200,
                color: (value) => "blue",
                align: "left",
                type: "image",
              },
              {
                id: "proPackage",
                label: "ProPackage",
                minWidth: 170,
                align: "center",
                color: (value) => "green",
              },
              {
                id: "sub",
                label: "Subscription",
                minWidth: 170,
                align: "left",
                color: (value) => "blue",
              },
              {
                id: "expire",
                label: "Expiration",
                minWidth: 70,
                align: "center",
                format: (value) => value.toLocaleString("en-US"),
                color: (value) => "blue",
              },
            ]}
            rows={[
              {
                id: 1,
                author: "Sarah Doe",
                proPackage: "Active",
                sub: "12 May, 2020",
                expire: "12 May, 2020 (21 Days left)",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
              },
              {
                id: 2,
                author: "Sarah Doe",
                proPackage: "Active",
                sub: "12 May, 2020",
                expire: "12 May, 2020 (21 Days left)",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
              },
              {
                id: 3,
                author: "Sarah Doe",
                proPackage: "Active",
                sub: "12 May, 2020",
                expire: "12 May, 2020 (21 Days left)",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
              },
              {
                id: 4,
                author: "Sarah Doe",
                proPackage: "Active",
                sub: "12 May, 2020",
                expire: "12 May, 2020 (21 Days left)",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
              },
              {
                id: 5,
                author: "Sarah Doe",
                proPackage: "Active",
                sub: "12 May, 2020",
                expire: "12 May, 2020 (21 Days left)",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
              },
              {
                id: 6,
                author: "Sarah Doe",
                proPackage: "Active",
                sub: "12 May, 2020",
                expire: "12 May, 2020 (21 Days left)",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
              },
            ]}
            actions={["edit"]}
            handleActionClick={onActionClicked}
            handleLinkClick={onLinkClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default ListSubscribers;
