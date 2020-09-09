import React from "react";
import ButtonToggleInput from "../../../components/buttonToggleInput/ButtonToggleInput";
import TextField from "../../../components/TextField/TextField";
import InputField from "../../../components/inputField/InputField";
import Button from "../../../components/button/Button";

const Privacy = () => {
  return (
    <div>
      <div className="intro-y box py-4">
        <div className="px-10">
          <div className="m-8">
            <ButtonToggleInput
              className="text-gray-600 text-sm"
              title="Download User Information"
              body="Allow users to download their account information from settings page"
            />
          </div>
          <div className="m-8">
            <ButtonToggleInput
              className="text-gray-600 text-sm"
              title="Download User Information"
              body="Allow users to download their account information from settings page"
            />
          </div>
          <div className="m-8">
            <ButtonToggleInput
              className="text-gray-600 text-sm"
              title="Download User Information"
              body="Allow users to download their account information from settings page"
            />
          </div>
          <div className="m-8">
            <ButtonToggleInput
              className="text-gray-600 text-sm"
              title="Download User Information"
              body="Allow users to download their account information from settings page"
            />
          </div>
        </div>
        <div className="side-nav__devider my-6 border-t-2"></div>
        <div className="px-10">
          <div className="m-8">
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <TextField
                  textTitle="Who can see your basic info"
                  textBody="Banner and profile, followers, likes, page view, bio"
                  textBodyLine="Everyone"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <TextField
                  textTitle="Who can see other info"
                  textBody="Shows, Videos, Recommendation etc"
                  textBodyLine="Only Followers"
                />
              </div>
            </div>
          </div>
          <div className="m-8">
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <TextField
                  textTitle="Who can see your basic info"
                  textBody="Banner and profile, followers, likes, page view, bio"
                  textBodyLine="Everyone"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <TextField
                  textTitle="Who can block you"
                  textBody="Banner and profile, followers, likes, page view, bio"
                  textBodyLine="Everyone"
                />
              </div>
            </div>
          </div>
          <div className="m-8">
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <TextField
                  textTitle="Who can see your post"
                  textBody="Banner and profile, followers, likes, page view, bio"
                  textBodyLine="Everyone"
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <TextField
                  textTitle="Who can message you"
                  textBody="Banner and profile, followers, likes, page view, bio"
                  textBodyLine="Everyone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-y col-span-12 flex items-center m-10 pr-16">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Save Changes"
        />
      </div>
    </div>
  );
};
export default Privacy;
