import React from "react";
import PropTypes from "prop-types";

const InputGroupText = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  disabled,
  error,
  info,
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      error={error}
      info={info}
    />
  );
};

InputGroupText.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
};

InputGroupText.defaultProps = {
  type: "text",
  disabled: false,
};

export default InputGroupText;
