import React from "react";
import PropTypes from "prop-types";

const ButtonToggleText = ({ title, body, onClick, onChange }) => {
  return (
    <div className="flex items-center my-3">
      <div className="">
        <p className="text-xl font-bold">{title}</p>
        <p
          className="w-3/5 text-gray-600"
          onClick={onClick}
          onChange={onChange}
        >
          {body}
        </p>
      </div>
      <input
        className="input input--switch ml-auto border-2 border-red-600"
        type="checkbox"
      />
    </div>
  );
};

ButtonToggleText.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default ButtonToggleText;
