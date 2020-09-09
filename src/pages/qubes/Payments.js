import React from "react";
import { useHistory, Link } from "react-router-dom";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Qubes",
  links: [
    {
      label: "Payment",
      url: "/qubes/qubes-payment",
    },
  ],
};

const Payments = () => {
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
                label: "TXN ID",
                minWidth: 100,
                color: (value) => "blue",
              },
              {
                id: "user",
                label: "User",
                minWidth: 200,
                color: (value) => "blue",
                type: "image",
              },
              {
                id: "package",
                label: "ProPackage/ Content on Demand",
                minWidth: 100,
                align: "center",
                color: (value) => "green",
              },
              {
                id: "amount",
                label: "Amount",
                minWidth: 170,
                align: "center",
                color: (value) => "blue",
              },
              {
                id: "date",
                label: "Date",
                minWidth: 170,
                align: "center",
                color: (value) => "blue",
              },
              {
                id: "status",
                label: "Status",
                minWidth: 170,
                align: "center",
                color: (value) => "white",
                type: "button",
                style: (value) =>
                  value === "Success"
                    ? "rounded-full bg-green-600 py-3"
                    : "rounded-full bg-blue-600 py-3",
                // backgroundColor: (value) =>
                //   value === "Success" ? "green" : "blue",
              },
            ]}
            rows={[
              {
                id: 1,
                user: "Sarah Doe",
                package: "ProPackage",
                amount: `N${5000}`,
                date: "12 May,2020",
                status: "Processing",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
              },
              {
                id: 2,
                user: "Sarah Doe",
                package: "ProPackage",
                amount: `N${5000}`,
                date: "12 May,2020",
                status: "Processing",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
              },
              {
                id: 3,
                user: "Sarah Doe",
                package: "ProPackage",
                amount: `N${5000}`,
                date: "12 May,2020",
                status: "Success",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
              },
              {
                id: 4,
                user: "Sarah Doe",
                package: "ProPackage",
                amount: `N${5000}`,
                date: "12 May,2020",
                status: "Processing",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
              },
              {
                id: 5,
                user: "Sarah Doe",
                package: "ProPackage",
                amount: `N${5000}`,
                date: "12 May,2020",
                status: "Processing",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
              },
              {
                id: 6,
                user: "Sarah Doe",
                package: "ProPackage",
                amount: `N${5000}`,
                date: "12 May,2020",
                status: "Processing",
                src:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
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

export default Payments;
