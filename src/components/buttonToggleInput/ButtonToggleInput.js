import React from "react";
import PropTypes from "prop-types";
import InputField from "../inputField/InputField";

const ButtonToggleInput = ({
  title,
  body,
  onClick,
  onChange,
  className,
  classNameText,
  bodyLine,
  bodyText,
}) => {
  return (
    <div className="flex items-center my-2">
      <div className="w-11/12">
        <span className="text-lg font-bold">{title}</span>
        <p className="text-gray-600 text-sm">{body}</p>
        <p className="text-gray-600 text-sm">{bodyText}</p>
        <span className="block text-base">{bodyLine}</span>
      </div>

      <div className="w-1/12 ml-auto">
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

ButtonToggleInput.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default ButtonToggleInput;
