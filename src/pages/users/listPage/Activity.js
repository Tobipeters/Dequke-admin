import React from "react";
import { useHistory } from "react-router-dom";
import CustomTable from "../../../components/table/CustomTable";

export default function Activity() {
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
      <div className="mt-10">
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            { id: "id", label: "ID", minWidth: 100, color: (value) => "blue" },
            {
              id: "author",
              label: "Author",
              minWidth: 200,
              color: (value) => "blue",
              align: "left",
              type: "image",
            },
            {
              id: "type",
              label: "Type",
              minWidth: 170,
              align: "left",
              color: (value) => "blue",
            },
            {
              id: "time",
              label: "Time",
              minWidth: 70,
              align: "center",
              format: (value) => value.toLocaleString("en-US"),
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
              author: "India",
              type: "IN",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 2,
              author: "India",
              type: "IN",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 3,
              author: "India",
              type: "IN",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 4,
              author: "India",
              type: "IN",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 5,
              author: "India",
              type: "IN",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 6,
              author: "India",
              type: "IN",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 7,
              author: "India",
              type: "IN",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 8,
              author: "India",
              type: "IN",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 9,
              author: "India",
              type: "IN",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
          ]}
          actions={["edit", "delete"]}
          handleActionClick={onActionClicked}
          handleLinkClick={onLinkClicked}
        />
      </div>
    </div>
  );
}
