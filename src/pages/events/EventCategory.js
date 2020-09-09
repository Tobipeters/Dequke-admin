import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as Icon from "react-feather";

import Button from "../../components/button/Button";
import CustomTable from "../../components/table/CustomTable";
import Card from "../../components/card/Card";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Events",
  links: [
    {
      label: "Event Category",
      url: "/events/event-category",
    },
  ],
};

const EventCategory = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
  };

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="flex justify-between mt-4">
        <Link
          to="/system-ads"
          className="text-red-700 flex mb-4 hover:text-red-700"
        >
          <Icon.ChevronLeft className="text-red-700" />
          Go Back
        </Link>
        <div className="intro-y flex justify-center col-span-12 items-center">
          <Button
            className="bg-red-700 text-white font-bold py-2 mr-3 px-4 rounded"
            value="Add Category"
          />
        </div>
      </div>
      <div class="col-span-12 mt-8"></div>
      <div className="mt-10">
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            {
              id: "id",
              label: "ID",
              align: "center",
              minWidth: 100,
              color: (value) => "blue",
            },
            {
              id: "event",
              label: "Event Category",
              minWidth: 200,
              align: "center",
              color: (value) => "blue",
              type: "link",
            },
            {
              id: "order",
              label: "Order",
              minWidth: 170,
              align: "center",
              color: (value) => "blue",
            },
          ]}
          rows={[
            {
              id: 1,
              event: "Performance",
              order: 1,
            },
            {
              id: 2,
              event: "Performance",
              order: 1,
            },
            {
              id: 3,
              event: "Performance",
              order: 1,
            },
            {
              id: 4,
              event: "Performance",
              order: 1,
            },
            {
              id: 5,
              event: "Performance",
              order: 1,
            },
            {
              id: 6,
              event: "Performance",
              order: 1,
            },
            {
              id: 7,
              event: "Performance",
              order: 1,
            },
            {
              id: 8,
              event: "Performance",
              order: 1,
            },
            {
              id: 9,
              event: "Performance",
              order: 1,
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

export default EventCategory;
