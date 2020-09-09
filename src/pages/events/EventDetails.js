import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

import Button from "../../components/button/Button";
import Profile from "../../components/profileCardWithoutTab/Profile";
import InputField from "../../components/inputField/InputField";
import InputDropdown from "../../components/inputDropdown/InputDropdown";
import InputTextArea from "../../components/inputTextArea/InputTextArea";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

export default function EventDetails() {
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
      <div className="flex justify-between">
        <Link
          to="/system-ads"
          className="text-red-700 flex mb-4 hover:text-red-700"
        >
          <Icon.ChevronLeft className="text-red-700" />
          Go Back
        </Link>
        <div className="intro-y flex justify-center col-span-12 items-center pr-16">
          <Button
            className="bg-red-700  text-white font-bold py-2 mr-3 px-4 rounded"
            value="View Profile"
          />
          <Button
            className="flex items-center justify-center bg-red-100 text-red-700 font-bold py-2 px-4 rounded"
            value="Save Changes"
            buttonIcon={<Icon.Trash2 className="w-4 h-4 mr-2" />}
          />
        </div>
      </div>

      <div className="">
        <Profile />
      </div>

      <div className="intro-y box px-6 sm:py-10 my-8">
        <div className="grid grid-cols-12 gap-4 row-gap-5">
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-lg font-bold">Directory</span>
            <InputField
              type="text"
              className="input w-full border flex-1 mt-5"
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
            <span className="text-lg font-bold">Event Name</span>
            <InputField
              type="text"
              className="input w-full border flex-1 mt-5"
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-lg font-bold">Event Type</span>
            <InputField
              type="text"
              className="input w-full border flex-1 mt-5"
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
            <span className="text-lg font-bold">Posted By</span>
            <InputField
              type="text"
              className="input w-full border flex-1 mt-5"
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-lg font-bold">Location</span>
            <InputField
              type="text"
              className="input w-full border flex-1 mt-5"
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
            <span className="text-lg font-bold">Dance Genre</span>
            <InputField
              type="text"
              className="input w-full border flex-1 mt-5"
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-lg font-bold">Start Date</span>
            <InputField
              type="text"
              className="input w-full border flex-1 mt-5"
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
            <span className="text-lg font-bold">End Date</span>
            <InputField
              type="text"
              className="input w-full border flex-1 mt-5"
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-lg font-bold">Role of Event</span>
            <InputDropdown
              type="text"
              className="input w-full border flex-1 mt-5"
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
            <span className="text-lg font-bold">Post Permission</span>
            <InputDropdown
              type="text"
              className="input w-full border flex-1 mt-5"
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
            <span className="text-lg font-bold">Post Permission</span>
            <InputTextArea
              type="text"
              className="input w-full border flex-1 mt-5 h-32"
            />
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4"></div>
          <div className="intro-y col-span-12 sm:col-span-6 my-8 mr-4">
            <div className="flex justify-between">
              <span className="uppercase text-gray-500">Photos</span>
              <div className="intro-y flex justify-center col-span-12 items-center">
                <Link className="py-2 text-red-700 px-4 rounded">View All</Link>
              </div>
            </div>
            <div class="">
              <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-24 mr-3 image-fit">
                1
              </div>
              <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-24 m-3 image-fit">
                2
              </div>
              <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-24 ml-3 image-fit">
                3
              </div>
            </div>
          </div>
          <div className="intro-y col-span-12 sm:col-span-6 my-8 mr-4">
            <div className="flex justify-between">
              <span className="uppercase text-gray-500">Videos</span>
              <div className="intro-y flex justify-center col-span-12 items-center">
                <Link className="py-2 text-red-700 px-4 rounded">View All</Link>
              </div>
            </div>
            <div class="">
              <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-24 mr-3 image-fit">
                1
              </div>
              <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-24 m-3 image-fit">
                2
              </div>
              <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-24 ml-3 image-fit">
                3
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <span className="text-lg font-bold my-4 block">Post Permission</span>
          <Link to="/">
            <span className="text-green-600">
              https://nairabox.com/thisevent
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
