import React from "react";
import { Link, useHistory } from "react-router-dom";

import Button from "../../../components/button/Button";
import InputTextArea from "../../../components/inputTextArea/InputTextArea";
import InputField from "../../../components/inputField/InputField";
import CustomTable from "../../../components/table/CustomTable";
import InputDropdown from "../../../components/inputDropdown/InputDropdown";

export default function Profile() {
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
      <div className="">
        <div className="intro-y box col-span-12 pb-6">
          <div className="p-5" id="new-products">
            <div className="my-6">
              <div className="w-full py-3 capitalize text-xl text-black">
                Members
              </div>
              <CustomTable
                pagination
                pagerows
                columns={[
                  {
                    id: "id",
                    label: "ID",
                    minWidth: 50,
                    color: (value) => "blue",
                  },
                  {
                    id: "name",
                    label: "Name",
                    minWidth: 170,
                    color: (value) => "blue",
                    type: "link",
                  },
                  {
                    id: "username",
                    label: "Username",
                    minWidth: 100,
                    align: "center",
                    color: (value) => "blue",
                  },
                  {
                    id: "joined",
                    label: "Joined",
                    minWidth: 100,
                    align: "center",
                    format: (value) => value.toLocaleString("en-US"),
                    color: (value) => "blue",
                  },
                  {
                    id: "status",
                    label: "Status",
                    minWidth: 100,
                    align: "center",
                    color: (value) => (value === "Accepted" ? "green" : "gray"),
                  },
                  {
                    id: "role",
                    label: "Role",
                    minWidth: 100,
                    align: "center",
                    color: (value) => "black",
                  },
                ]}
                rows={[
                  {
                    id: 1,
                    name: "Sarah Doe",
                    username: "/sarahdoe",
                    joined: "19/08/2020",
                    status: "Accepted",
                    role: "Founder",
                  },
                  {
                    id: 2,
                    name: "Sarah Doe",
                    username: "/sarahdoe",
                    joined: "19/08/2020",
                    status: "Waiting",
                    role: "Admin",
                  },
                  {
                    id: 3,
                    name: "Sarah Doe",
                    username: "/sarahdoe",
                    joined: "19/08/2020",
                    status: "Accepted",
                    role: "Founder",
                  },
                  {
                    id: 4,
                    name: "Sarah Doe",
                    username: "/sarahdoe",
                    joined: "19/08/2020",
                    status: "Accepted",
                    role: "Founder",
                  },
                  {
                    id: 5,
                    name: "Sarah Doe",
                    username: "/sarahdoe",
                    joined: "19/08/2020",
                    status: "Accepted",
                    role: "Founder",
                  },
                  {
                    id: 6,
                    name: "Sarah Doe",
                    username: "/sarahdoe",
                    joined: "19/08/2020",
                    status: "Accepted",
                    role: "Founder",
                  },
                ]}
                handleActionClick={onActionClicked}
                handleLinkClick={onLinkClicked}
              />
            </div>
            <div>
              <h4 className="uppercase">bio</h4>
              <InputTextArea className="h-40 w-full rounded-md border border-gray-700" />
            </div>
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-16">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <span className="text-xl font-bold">Dance Genre</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <span className="text-xl font-bold">Dance Genre Expertise</span>
                <InputDropdown
                  type="text"
                  className="input w-full border flex-1"
                  dropdownElements=""
                />
              </div>
            </div>
            <div className="side-nav__devider my-10 border-t-2"></div>
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-16">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <span className="text-xl font-bold">Shows</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <span className="text-xl font-bold">
                  Location, Date, Description
                </span>
                <InputField
                  type="text"
                  className="input w-full border flex-1"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <span className="text-xl font-bold">Classes</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <span className="text-xl font-bold">
                  Location, Date, Description
                </span>
                <InputField
                  type="text"
                  className="input w-full border flex-1"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <span className="text-xl font-bold">Performances</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <span className="text-xl font-bold">
                  Location, Date, Description
                </span>
                <InputField
                  type="text"
                  className="input w-full border flex-1"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <span className="text-xl font-bold">Achievements</span>
                <InputField
                  type="text"
                  className="input w-full border flex-1"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <span className="text-xl font-bold">
                  Location, Date, Description
                </span>
                <InputField
                  type="text"
                  className="input w-full border flex-1"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 row-gap-5 mx-8">
            <div className="intro-y col-span-12 sm:col-span-6 mr-4">
              <div className="flex justify-between">
                <span className="uppercase text-gray-500">Photos</span>
                <div className="intro-y flex justify-center col-span-12 items-center">
                  <Link className="text-red-700 px-4 rounded">View All</Link>
                </div>
              </div>
              <div class="">
                <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 mr-2 image-fit">
                  1
                </div>
                <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 m-2 image-fit">
                  2
                </div>
                <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 ml-2 image-fit">
                  3
                </div>
              </div>
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mr-4">
              <div className="flex justify-between">
                <span className="uppercase text-gray-500">Videos</span>
                <div className="intro-y flex justify-center col-span-12 items-center">
                  <Link className="text-red-700 px-4 rounded">View All</Link>
                </div>
              </div>
              <div class="">
                <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 mr-2 image-fit">
                  1
                </div>
                <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 m-2 image-fit">
                  2
                </div>
                <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 ml-2 image-fit">
                  3
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
          <div className="p-5">
            <div className="">
              <div className="grid grid-cols-12 gap-4 row-gap-5 mt-16">
                <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                  <span className="text-xl font-bold">
                    Vacancies & Recruitment
                  </span>
                  <InputField
                    type="text"
                    className="input w-full border flex-1"
                  />
                </div>
                <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                  <span className="text-xl font-bold">Requirements</span>
                  <InputField
                    type="text"
                    className="input w-full border flex-1"
                  />
                </div>
              </div>
            </div>
            <div className="side-nav__devider my-6 border-t-2"></div>
            <div>
              <div className="grid grid-cols-12 gap-4 row-gap-5 mt-16">
                <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                  <span className="text-xl font-bold">
                    Reviews & Recommendation
                  </span>
                  <InputField
                    type="text"
                    className="input w-full border flex-1"
                  />
                </div>
                <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                  <span className="text-xl font-bold">User, Quote, Date</span>
                  <InputField
                    type="text"
                    className="input w-full border flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-y col-span-12 flex items-center m-10 pr-16">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Save Changes"
        />
      </div>
    </div>
  );
}
