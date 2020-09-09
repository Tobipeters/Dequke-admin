import React from "react";
import { useHistory, Link } from "react-router-dom";
import ButtonToggleInput from "../../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../../components/button/Button";
import CustomTable from "../../../components/table/CustomTable";

export default function Extras() {
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
      <div className="intro-y box py-4">
        <div className="px-10">
          <div className="m-8">
            <ButtonToggleInput
              className="text-gray-600 text-sm"
              title="Download User Information"
              body="Allow users to download their account information from settings page"
            />
          </div>
          <div className="m-8">
            <ButtonToggleInput
              className="text-gray-600 text-sm"
              title="Download User Information"
              body="Allow users to download their account information from settings page"
            />
          </div>
          <div className="intro-y col-span-12 flex items-center m-8">
            <Button
              className="bg-red-700 text-white font-bold py-2 px-4 rounded"
              value="Save Changes"
            />
          </div>
        </div>
      </div>
      <div className="intro-y box py-4 my-8">
        <div className="px-10">
          <div className="m-8">
            <span className="text-red-600 capitalize my-5">ads</span>
          </div>
          <div className="m-8">
            <CustomTable
              pagination
              pagerows
              columns={[
                {
                  id: "id",
                  label: "ID",
                  minWidth: 60,
                  color: (value) => "blue",
                },
                {
                  id: "title",
                  label: "Title",
                  minWidth: 170,
                  color: (value) => "blue",
                },
                {
                  id: "adtype",
                  label: "Ad Type",
                  minWidth: 100,
                  color: (value) => "blue",
                },
                {
                  id: "budget",
                  label: "Budget",
                  minWidth: 100,
                  align: "center",
                  color: (value) => "blue",
                },
                {
                  id: "status",
                  label: "Status",
                  minWidth: 170,
                  align: "center",
                  color: (value) => (value.startsWith("Not") ? "red" : "green"),
                },
              ]}
              rows={[
                {
                  id: 1,
                  title: "Performance",
                  adtype: "Post",
                  budget: `N${4000}`,
                  status: "Active",
                },
                {
                  id: 2,
                  title: "Performance",
                  adtype: "Post",
                  budget: `N${4000}`,
                  status: "Not Active",
                },
                {
                  id: 3,
                  title: "Performance",
                  adtype: "Post",
                  budget: `N${4000}`,
                  status: "Active",
                },
                {
                  id: 4,
                  title: "Performance",
                  adtype: "Post",
                  budget: `N${4000}`,
                  status: "Active",
                },
                {
                  id: 5,
                  title: "Performance",
                  adtype: "Post",
                  budget: `N${4000}`,
                  status: "Active",
                },
                {
                  id: 6,
                  title: "Performance",
                  adtype: "Post",
                  budget: `N${4000}`,
                  status: "Active",
                },
                {
                  id: 7,
                  title: "Performance",
                  adtype: "Post",
                  budget: `N${4000}`,
                  status: "Active",
                },
                {
                  id: 8,
                  title: "Performance",
                  adtype: "Post",
                  budget: `N${4000}`,
                  status: "Active",
                },
                {
                  id: 9,
                  title: "Performance",
                  adtype: "Post",
                  budget: `N${4000}`,
                  status: "Active",
                },
              ]}
              actions={["edit", "delete", "play"]}
              handleActionClick={onActionClicked}
              handleLinkClick={onLinkClicked}
            />
          </div>
        </div>
      </div>
      <div className="intro-y box py-4 my-8">
        <div className="px-10">
          <div className="m-8">
            <span className="text-red-600 capitalize my-5">paid contents</span>
          </div>
          <div className="m-8">
            <CustomTable
              pagination
              pagerows
              columns={[
                {
                  id: "id",
                  label: "ID",
                  minWidth: 40,
                  color: (value) => "blue",
                },
                {
                  id: "title",
                  label: "Title",
                  minWidth: 70,
                  color: (value) => "blue",
                },
                {
                  id: "buyer",
                  label: "Buyers",
                  minWidth: 50,
                  color: (value) => "blue",
                },
                {
                  id: "price",
                  label: "Price",
                  minWidth: 50,
                  align: "center",
                  color: (value) => "blue",
                },
                {
                  id: "status",
                  label: "Status",
                  minWidth: 50,
                  align: "center",
                  color: (value) => (value === "Active" ? "green" : "red"),
                },
                {
                  id: "watch",
                  label: "",
                  minWidth: 50,
                  align: "center",
                  color: (value) => "blue",
                },
              ]}
              rows={[
                {
                  id: 1,
                  title: "Performance",
                  buyer: 440,
                  price: `N${4000}`,
                  watch: (
                    <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                      Watch
                    </Link>
                  ),
                  status: "Active",
                },
                {
                  id: 2,
                  title: "Performance",
                  buyer: 440,
                  price: `N${4000}`,
                  status: "Active",
                  watch: (
                    <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                      Watch
                    </Link>
                  ),
                },
                {
                  id: 3,
                  title: "Performance",
                  buyer: 440,
                  price: `N${4000}`,
                  status: "Active",
                  watch: (
                    <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                      Watch
                    </Link>
                  ),
                },
                {
                  id: 4,
                  title: "Performance",
                  buyer: 440,
                  price: `N${4000}`,
                  status: "Active",
                  watch: (
                    <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                      Watch
                    </Link>
                  ),
                },
                {
                  id: 5,
                  title: "Performance",
                  buyer: 440,
                  price: `N${4000}`,
                  status: "Active",
                  watch: (
                    <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                      Watch
                    </Link>
                  ),
                },
                {
                  id: 6,
                  title: "Performance",
                  buyer: 440,
                  price: `N${4000}`,
                  status: "Active",
                  watch: (
                    <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                      Watch
                    </Link>
                  ),
                },
                {
                  id: 7,
                  title: "Performance",
                  buyer: 440,
                  price: `N${4000}`,
                  status: "Active",
                  watch: (
                    <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                      Watch
                    </Link>
                  ),
                },
                {
                  id: 8,
                  title: "Performance",
                  buyer: 440,
                  price: `N${4000}`,
                  status: "Active",
                  watch: (
                    <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                      Watch
                    </Link>
                  ),
                },
                {
                  id: 9,
                  title: "Performance",
                  buyer: 440,
                  price: `N${4000}`,
                  status: "Active",
                  watch: (
                    <Link className="bg-green-700 text-white rounded-full px-6 py-2">
                      Watch
                    </Link>
                  ),
                },
              ]}
              actions={["edit", "delete"]}
              handleActionClick={onActionClicked}
              handleLinkClick={onLinkClicked}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
