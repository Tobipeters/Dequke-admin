import React from "react";
import * as Icon from "react-feather";

const Card = ({ cardTitle, cardBody }) => {
  return (
    <div class="col-span-12 mt-8">
      <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
          <div class="zoom-in">
            <div class="box p-5">
              <div class="text-3xl font-bold leading-8 mt-4 mb-3">
                {cardTitle} 4.510
              </div>

              <div class="flex">
                <div class="text-lg text-gray-600 mt-1">
                  {cardBody} Item Sales
                </div>
                <div class="ml-auto">
                  <span className="block p-1 bg-red-200 rounded-full">
                    <span className="block w-8 p-1 h-8 rounded-full">
                      <Icon.Users classNameName="text-red-600 text-theme-10 tooltip cursor-pointer" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div >
  );
};

export default Card;
