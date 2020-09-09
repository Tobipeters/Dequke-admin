import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CustomTable from "../../components/table/CustomTable";
import Button from "../../components/button/Button";
import VerifyModal from "../../components/verifyModal/VerifyModal";

export default function AggregateData() {
  const history = useHistory();
  let [show, setShow] = useState(false);
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
    history.push("/users/list-users/user");
  };

  const onClose = (status) => {
    setShow(!show);
  };
  const onActionClicked = (e, payload) => {
    switch (payload.type) {
      case "attachment":
        setShow(true);
        break;
      case "cancel":
        setShow(false);
      case "correct":
      //To do
    }
  };
  return (
    <div>
      <VerifyModal show={show} handleClose={onClose} />
      <div className="top-bar text-lg text-gray-600 mt-1">Aggregate Data</div>
      <hr className="mb-3" />
      <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Mark All As Safe"
        />
      </div>
      <div className="">
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            { id: "id", label: "ID", minWidth: 70, color: (value) => "blue" },
            {
              id: "name",
              label: "Name",
              minWidth: 100,
              color: (value) => "blue",
              type: "link",
            },
            {
              id: "username",
              label: "Username",
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
              name: "India",
              username: "IN",
              joined: 1324171354,
              status: "Published",
            },
            {
              id: 2,
              name: "India",
              username: "IN",
              joined: 1324171354,
              status: "Published",
            },
            {
              id: 3,
              name: "China",
              username: "CN",
              joined: 1403500365,
              status: "Not-Published",
            },
            {
              id: 4,
              name: "Italy",
              username: "IT",
              joined: 60483973,
              status: "Published",
            },
            {
              id: 5,
              name: "United States",
              username: "US",
              joined: 327167434,
              status: "Published",
            },
            {
              id: 6,
              name: "Canada",
              username: "CA",
              joined: 37602103,
              status: "Published",
            },
            {
              id: 7,
              name: "Australia",
              username: "AU",
              joined: 25475400,
              status: "Waiting",
            },
            {
              id: 8,
              name: "Germany",
              username: "DE",
              joined: 83019200,
              status: "Not-Published",
            },
            {
              id: 9,
              name: "Ireland",
              username: "IE",
              joined: 4857000,
              status: "Published",
            },
          ]}
          actions={["correct", "close", "attachment"]}
          handleActionClick={onActionClicked}
          handleLinkClick={onLinkClicked}
        />
      </div>
    </div>
  );
}
