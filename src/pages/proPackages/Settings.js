import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

import Button from "../../components/button/Button";
import ToggleButton from "../../components/buttonToggleInput/ToggleButton";
import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

export default function Settings() {
  const data = {
    start: "Pro Package",
    links: [
      {
        label: "Settings",
        url: "/package/settings",
      },
    ],
  };
  return (
    <div className="">
      <CustomBreadcrumb data={data} />
      <div class="intro-y tab-content mt-5">
        <div class="tab-content__pane active" id="dashboard">
          <div className="pl-4">
            <ButtonToggleInput
              title="Enable Ads"
              body="Enable the directory for better SEO results"
              bodyText="Make the website public to allow non logged users to view website content"
            />
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
          <div class="intro-y box pb-4 col-span-12">
            <div class="flex items-center py-3 px-5 border-b-2 border-gray-200">
              <h2 class="font-medium text-xl mr-auto">Permission</h2>
            </div>

            <div className="grid grid-cols-12 gap-4 row-gap-5">
              <div className="intro-y col-span-12 sm:col-span-6 mr-4">
                <div className="border-r-2 border-gray-200 my-2">
                  <div class="px-5 py-2">
                    <div class="flex flex-col sm:flex-row mt-2">
                      <div class="mr-auto my-2">
                        <a href="#" class="text-lg font-medium">
                          Admin can delete member
                        </a>
                      </div>
                      <div class="text-center">
                        <ToggleButton />
                      </div>
                    </div>
                    <div class="flex flex-col sm:flex-row mt-5">
                      <div class="mr-auto my-2">
                        <a href="#" class="text-lg font-medium">
                          Admin can send invites
                        </a>
                      </div>
                      <div class="text-center">
                        <ToggleButton />
                      </div>
                    </div>
                    <div class="flex flex-col sm:flex-row mt-5">
                      <div class="mr-auto my-2">
                        <a href="#" class="text-lg font-medium">
                          Admin can ban a member
                        </a>
                      </div>
                      <div class="text-center">
                        <ToggleButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <div class="px-5 py-2 my-2">
                  <div class="flex flex-col sm:flex-row mt-2">
                    <div class="mr-auto my-2">
                      <a href="#" class="text-lg font-medium">
                        Admin can delete Post
                      </a>
                    </div>
                    <div class="text-center">
                      <ToggleButton />
                    </div>
                  </div>
                  <div class="flex flex-col sm:flex-row mt-5">
                    <div class="mr-auto my-2">
                      <a href="#" class="text-lg font-medium">
                        Admin can ban a member
                      </a>
                    </div>
                    <div class="text-center">
                      <ToggleButton />
                    </div>
                  </div>
                  <div class="flex flex-col sm:flex-row mt-5">
                    <div class="mr-auto my-2">
                      <a href="#" class="text-lg font-medium">
                        Admin can delete Post
                      </a>
                    </div>
                    <div class="text-center">
                      <ToggleButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end my-8">
            <Button
              className="bg-red-700 text-white font-bold py-2 px-4 rounded"
              value="Save Changes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
