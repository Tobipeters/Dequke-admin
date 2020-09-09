import React from "react";
import { useHistory, Link } from "react-router-dom";

import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import TopBar from "../../components/topbar/TopBar";
import Button from "../../components/button/Button";

const Reports = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    // console.log(JSON.stringify(payload));
    // history.push("/users/list-users/user");
  };

  const onActionClicked = (e, payload) => {
    // alert(JSON.stringify(payload));
  };
  return (
    <div>
      <div className="top-bar text-lg text-gray-600 mt-1">Reports</div>
      <hr className="mb-3" />
      <div class="col-span-12 mt-8">
        <div
          className="intro-y col-span-12 flex items-center m-8 pr-16"
          style={{ float: "right" }}
        >
          <Button
            className="bg-red-700 text-white font-bold py-2 px-4 rounded"
            value="Mark All As Save"
          />
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            { id: "id", label: "ID", minWidth: 170, color: (value) => "blue" },
            {
              id: "node",
              label: "Node",
              minWidth: 100,
              color: (value) => "green",
              type: "link",
              align: "center",
            },
            {
              id: "type",
              label: "Type",
              minWidth: 170,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "reported",
              label: "Reported By",
              minWidth: 200,
              color: (value) => "blue",
              align: "left",
              type: "image",
            },
            {
              id: "time",
              label: "Time",
              minWidth: 70,
              align: "center",
              format: (value) => value.toLocaleString("en-US"),
              color: (value) => "blue",
            },
          ]}
          rows={[
            {
              id: 111,
              node: (
                <Link className="bg-red-700 text-white rounded-full px-6 py-2">
                  View Post
                </Link>
              ),
              reported: "Sarah Doe",
              type: "Post",
              time: "14 Nov, 2019",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 111,
              node: "DMW",
              reported: "Sarah Doe",
              type: "Post",
              time: "14 Nov, 2019",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 111,
              node: (
                <Link className="bg-red-700 text-white rounded-full px-6 py-2">
                  View Post
                </Link>
              ),
              reported: "Sarah Doe",
              type: "Post",
              time: "14 Nov, 2019",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 111,
              node: "DMW",
              reported: "Sarah Doe",
              type: "Post",
              time: "14 Nov, 2019",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 111,
              node: "DMW",
              reported: "Sarah Doe",
              type: "Post",
              time: "14 Nov, 2019",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 111,
              node: "DMW",
              reported: "Sarah Doe",
              type: "Post",
              time: "14 Nov, 2019",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 111,
              node: (
                <Link className="bg-red-700 text-white rounded-full px-6 py-2">
                  View Post
                </Link>
              ),
              reported: "Sarah Doe",
              type: "Post",
              time: "14 Nov, 2019",
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
};

export default Reports;
