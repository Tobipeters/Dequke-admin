import React from "react";
import InputField from "../inputField/InputField";

const ToggleButton = ({ onClick, onChange }) => {
  return (
    <div className="flex items-center my-2">
      <div className="w-full ml-auto">
        <InputField
          className="input input--switch ml-auto justify-end border-2 border-red-600"
          type="checkbox"
          onClick={onClick}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ToggleButton;
