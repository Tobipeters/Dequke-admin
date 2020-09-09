import React from "react";
import ToggleButton from "../../../components/buttonToggleInput/ToggleButton";
import Card from "../../../components/card/Card";
import Button from "../../../components/button/Button";
import InputField from "../../../components/inputField/InputField";

export default function Account() {
  return (
    <div className="">
      <div class="intro-y tab-content mt-5">
        <div class="tab-content__pane active" id="dashboard">
          <div class="grid grid-cols-12 gap-6">
            <div class="intro-y box col-span-12 lg:col-span-6">
              <div class="flex items-center p-5 border-b-2 border-gray-200">
                <h2 class="font-medium text-base mr-auto">Account</h2>
              </div>
              <div class="px-5 pb-4">
                <div class="flex flex-col sm:flex-row mt-2">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      Verified User
                    </a>
                  </div>
                  <div class="text-center">
                    <ToggleButton />
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row mt-5">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      Banned
                    </a>
                  </div>
                  <div class="text-center">
                    <ToggleButton />
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row mt-5">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      Account Activated
                    </a>
                  </div>
                  <div class="text-center">
                    <ToggleButton />
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row mt-5">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      Email Verified
                    </a>
                  </div>
                  <div class="text-center">
                    <ToggleButton />
                  </div>
                </div>
              </div>
            </div>
            <div class="intro-y box col-span-12 lg:col-span-6">
              <div class="flex items-center p-5 border-b-2 border-gray-200">
                <h2 class="font-medium text-base mr-auto">Account</h2>
              </div>
              <div class="px-5 py-4">
                <div class="flex">
                  <div class="h-10 w-1/2">
                    <div className="truncate sm:whitespace-normal text-lg font-medium items-center">
                      User Group
                    </div>
                  </div>
                  <div class="w-1/2 h-10">
                    <div className="truncate sm:whitespace-normal">Admin</div>
                  </div>
                </div>
                <div class="flex mt-5">
                  <div class="h-10 w-1/2">
                    <div className="truncate sm:whitespace-normal text-lg font-medium items-center">
                      Username
                    </div>
                  </div>
                  <div class="w-1/2 h-10">
                    <div className="truncate sm:whitespace-normal text-blue-400 underline">
                      <a>/deqube.dance/johnDoe</a>
                    </div>
                  </div>
                </div>
                <div class="flex mt-5">
                  <div class="h-10 w-1/2">
                    <div className="truncate sm:whitespace-normal text-lg font-medium items-center">
                      Email Address
                    </div>
                  </div>
                  <div class="w-1/2 h-10">
                    <div className="truncate sm:whitespace-normal text-blue-400 underline">
                      <a>loremipsum@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div class="flex mt-5">
                  <div class="h-10 w-1/2">
                    <div className="truncate sm:whitespace-normal text-lg font-medium items-center">
                      Password
                    </div>
                  </div>

                  <div class="w-1/2 h-10">
                    <div className="truncate sm:whitespace-normal text-blue-400 underline">
                      <InputField
                        type="text"
                        className="input w-full border flex-1 border-gray-800"
                        disabled="disabled"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Total Likes" />
          <Card cardTitle="116,000" cardBody="Total Comments" />
          <Card cardTitle="116,000" cardBody="Total Shared" />
        </div>
      </div>

      <div className="intro-y col-span-12 flex items-center m-8 pr-16">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Save Changes"
        />
      </div>
    </div>
  );
}
