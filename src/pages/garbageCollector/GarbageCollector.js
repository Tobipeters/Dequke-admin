import React from "react";

import BannerInfo from "../../components/bannerInfo/BannerInfo";
import InputDropdown from "../../components/inputDropdown/InputDropdown";
import Button from "../../components/button/Button";
import { data } from "autoprefixer";

const GarbageCollector = () => {
  const datas = [
    "Delete all not activated accounts",
    "Delete Users that are not logged in more than 1 week",
    "Delete Users that are not logged in more than 1 month",
    "Delete Users that are not logged in more than 1 year",
    "Delete posts that are longer than 1 week",
    "Delete posts that are longer than 1 month",
    "Delete posts that are longer than 1 year",
  ];

  const dropdownElements = datas.map((data, id) => {
    return (
      <option value={data} key={id}>
        {data}
      </option>
    );
  });

  return (
    <div>
      <div className="top-bar text-lg text-gray-600 mt-1">
        Garbage Collector
      </div>
      <hr className="mb-3" />
      <div className="mt-10">
        <div className="mb-10">
          <BannerInfo
            svgClassName="fill-current h-6 w-6 text-white-500 mr-4"
            bannerBody="Garbage collector will remove all selected data and might take some time"
          />
        </div>
        <div className="mt-8">
          <span className="text-lg">What you want to delete</span>
          <InputDropdown
            type="text"
            className="input w-full border flex-1 mb-6"
            dropdownElements={dropdownElements}
          />
          <Button
            className="bg-red-700 my-8 text-white font-bold py-2 px-4 rounded"
            value="Run"
          />
        </div>
      </div>
    </div>
  );
};

export default GarbageCollector;
