import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const InputTextArea = ({
  name,
  placeholder,
  value,
  id,
  className,
  onChange,
  onClick,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

InputTextArea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputTextArea;
