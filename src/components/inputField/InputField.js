import React from "react";

const InputField = ({
  type,
  id,
  name,
  value,
  onChange,
  onClick,
  disabled,
  className,
  placeholder,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default InputField;
