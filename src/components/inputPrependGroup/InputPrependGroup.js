import React from "react";
import * as Icon from "react-feather";

const InputPrependGroup = ({ prependLabel }) => {
  return (
    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
      <div className="flex -mr-px">
        <span className="flex items-center leading-normal bg-grey-900 rounded rounded-r-none border border-r-0 border-grey-800 px-4 py-2 whitespace-no-wrap text-grey-dark text-sm">
          <span className="pr-2">{prependLabel}</span>{" "}
          <Icon.XCircle className="text-gray-500 text-sm" />
        </span>
      </div>
      <input
        type="text"
        className="input w-full border flex-1 px-4 py-2 pr-8"
      />
    </div>
  );
};

export default InputPrependGroup;
