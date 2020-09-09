import React from "react";
import Button from "../../../components/button/Button";
import InputDropdown from "../../../components/inputDropdown/InputDropdown";

export default function Membership() {
  return (
    <div>
      <div className="intro-y box py-10">
        <div className="px-10">
          <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-lg font-bold">Current Package</span>
              <InputDropdown
                type="text"
                className="input w-full border flex-1"
                dropdownElements=""
              />
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
