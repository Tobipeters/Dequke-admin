import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Twemoji } from "react-emoji-render";

import CustomTable from "../../components/table/CustomTable";
import Button from "../../components/button/Button";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Reaction",
  links: [
    {
      label: "Reactions",
      url: "/reactions/reaction",
    },
  ],
};

export default function Reaction() {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    // console.log(JSON.stringify(payload));
    // history.push("/users/list-users/user");
  };

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end">
        <Link
          to="/reactions/add-reaction"
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Reaction
        </Link>
      </div>
      <div className="mt-10">
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            { id: "id", label: "ID", minWidth: 170, color: (value) => "blue" },
            {
              id: "preview",
              label: "Preview",
              minWidth: 100,
              color: (value) => "blue",
              type: "emoji",
            },
            {
              id: "pattern",
              label: "Pattern",
              minWidth: 170,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "class",
              label: "Class",
              minWidth: 170,
              align: "center",
              format: (value) => value.toLocaleString("en-US"),
              color: (value) => "blue",
            },
          ]}
          rows={[
            {
              id: 111,
              preview: <Twemoji text=":)" />,
              pattern: ":)",
              class: "Laugh",
            },
            {
              id: 322,
              preview: <Twemoji text=":)" />,
              pattern: ":)",
              class: "Laugh",
            },
            {
              id: 351,
              preview: <Twemoji text=":)" />,
              pattern: ":)",
              class: "Laugh",
            },
            {
              id: 111,
              preview: <Twemoji text=":)" />,
              pattern: ":)",
              class: "Laugh",
            },
            {
              id: 351,
              preview: <Twemoji text=":)" />,
              pattern: ":)",
              class: "Laugh",
            },
            {
              id: 322,
              preview: <Twemoji text=":)" />,
              pattern: ":)",
              class: "Laugh",
            },
            {
              id: 111,
              preview: <Twemoji text=":)" />,
              pattern: ":)",
              class: "Laugh",
            },
            {
              id: 111,
              preview: <Twemoji text=":)" />,
              pattern: ":)",
              class: "Laugh",
            },
            {
              id: 111,
              preview: <Twemoji text=":)" />,
              pattern: ":)",
              class: "Laugh",
            },
          ]}
          withEmoji
          actions={["edit", "delete"]}
          handleActionClick={onActionClicked}
          handleLinkClick={onLinkClicked}
        />
      </div>
    </div>
  );
}
