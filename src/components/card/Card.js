import React from "react";
import * as Icon from "react-feather";

const Card = ({ cardTitle, cardBody }) => {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
      <div className="zoom-in">
        <div className="box p-5">
          <div className="text-3xl font-bold leading-8 mt-2 mb-5">
            {cardTitle}
          </div>

          <div className="flex">
            <div className="text-lg text-gray-600 mt-1">{cardBody}</div>
            <div className="ml-auto">
              <span className="block p-1 bg-red-200 rounded-full">
                <span className="block w-8 p-1 h-8 rounded-full">
                  <Icon.Users className="text-red-600 text-theme-10 tooltip cursor-pointer" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
