import React from "react";
import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Settings",
  links: [
    {
      label: "Payment Settings",
      url: "/settings/payment-settings",
    },
  ],
};

const Payment = () => {
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="intro-y box py-10 px-10 sm:py-16 mt-3">
        <div className="m-8">
          <ButtonToggleInput
            title="Users can request for payment"
            body="Enable the directory for better SEO results Make the website public to allow non logged users to view website content"
          />
        </div>
        <div className="m-8">
          <ButtonToggleInput
            title="Users can request for payment anytime"
            body="Users can create pages or only admins/moderators"
          />
        </div>
        <div className="m-8">
          <span className="text-xl block font-semibold my-2">
            Number of times users can ask for payment in a week
          </span>
          <div className="grid grid-cols-12 gap-4 row-gap-5">
            <div className="intro-y col-span-12 sm:col-span-6">
              <InputField type="text" className="input w-full border flex-1" />
            </div>
          </div>
          <span className="text-gray-500 block">
            Number of invalid login attempts before account get blocked
          </span>
        </div>
        <div className="m-8">
          <span className="text-xl block font-semibold my-2">
            Days of the week user can request for payment
          </span>
          <div className="grid grid-cols-12 gap-4 row-gap-5">
            <div className="intro-y col-span-12 sm:col-span-6">
              <InputField type="text" className="input w-full border flex-1" />
            </div>
          </div>
          <span className="text-gray-500 block">
            Number of minuted the account will still locked out
          </span>
        </div>
        <div className="m-8">
          <div className="intro-y col-span-12 sm:col-span-6 mb-3">
            <p className="text-xl block font-semibold my-3">Payment Medium</p>
            <p className="text-gray-500 mb-3">
              Users can create Agency or only admins/moderators
            </p>
            <div className="flex">
              <div className="mr-16">
                <InputField
                  type="checkbox"
                  className="input w-full text-sm border flex-1 mr-2"
                />
                <label className="text-xl">Bank</label>
              </div>
              <div className="mr-16">
                <InputField
                  type="checkbox"
                  className="input w-full text-sm border flex-1 mr-2"
                />
                <label className="text-xl">eWallet</label>
              </div>
              <div className="mr-1">
                <InputField
                  type="checkbox"
                  className="input w-full text-sm border flex-1 mr-2"
                />
                <label className="text-xl">PayPal</label>
              </div>
            </div>
          </div>
        </div>
        <div className="m-8">
          <p className="text-xl block font-semibold my-3">
            Maximum amount a user can request
          </p>
          <p className="text-gray-500 mb-3">
            Users can create Events or only admins/moderators
          </p>
          <div className="grid grid-cols-12 gap-4 row-gap-5">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <InputField type="text" className="input w-full border flex-1" />
            </div>
          </div>
        </div>
        <div className="m-8">
          <p className="text-xl block font-semibold my-3">
            Percentage commission on payments
          </p>
          <p className="text-gray-500 mb-3">
            Users can create Events or only admins/moderators
          </p>
          <div className="grid grid-cols-12 gap-4 row-gap-5">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <InputField type="text" className="input w-full border flex-1" />
            </div>
          </div>
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
};

export default Payment;
