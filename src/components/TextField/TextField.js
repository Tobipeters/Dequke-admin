import React from "react";

const TextField = ({ textTitle, textBody, textBodyLine }) => {
  return (
    <div className="w-full">
      <h4 className="uppercase text-gray-500 mb-3">{textTitle}</h4>
      <p className="font-medium mb-6 text-sm">{textBody}</p>
      <span className="font-bold text-base">{textBodyLine}</span>
    </div>
  );
};

export default TextField;
