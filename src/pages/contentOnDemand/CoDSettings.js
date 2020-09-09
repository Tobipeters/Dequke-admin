import React from "react";
import { useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import InputField from "../../components/inputField/InputField";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Content On Demand",
  links: [
    {
      label: "CoD Settingss",
      url: "/cod/cod-settings",
    },
  ],
};

const CoDSettings = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
    history.push("/users/list-users/user");
  };

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />
      <div className="pl-4">
        <ButtonToggleInput
          title="Enable Ads"
          body="Enable the directory for better SEO results"
          bodyText="Make the website public to allow non logged users to view website content"
        />
      </div>
      <div className="side-nav__devider my-6 border-t-2"></div>
      <div class="col-span-12 mt-8">
        <div style={{ marginTop: "50px" }}>
          <CustomTable
            pagination
            pagerows
            columns={[
              {
                id: "id",
                label: "ID",
                minWidth: 100,
                color: (value) => "blue",
              },
              {
                id: "video",
                label: "Video Duration",
                minWidth: 200,
                color: (value) => "blue",
                type: "link",
              },
              {
                id: "price",
                label: "Price",
                minWidth: 170,
                align: "center",
                color: (value) => "blue",
              },
            ]}
            rows={[
              {
                id: 1,
                video: "0sec-15sec",
                price: `N${2000}`,
              },
              {
                id: 2,
                video: "0sec-15sec",
                price: `N${2000}`,
              },
              {
                id: 3,
                video: "0sec-15sec",
                price: `N${2000}`,
              },
              {
                id: 4,
                video: "0sec-15sec",
                price: `N${2000}`,
              },
              {
                id: 5,
                video: "0sec-15sec",
                price: `N${2000}`,
              },
              {
                id: 6,
                video: "0sec-15sec",
                price: `N${2000}`,
              },
              {
                id: 7,
                video: "0sec-15sec",
                price: `N${2000}`,
              },
              {
                id: 8,
                video: "0sec-15sec",
                price: `N${2000}`,
              },
              {
                id: 9,
                video: "0sec-15sec",
                price: `N${2000}`,
              },
            ]}
            actions={["edit", "delete"]}
            handleActionClick={onActionClicked}
            handleLinkClick={onLinkClicked}
          />
        </div>
      </div>
      <div className="side-nav__devider my-6 border-t-2"></div>
      <div className="mb-16">
        <p className="text-xl font-bold mb-5">Payment Method</p>
        <div className="flex">
          <span className="mr-16">
            <InputField type="checkbox" />
            <label className="text-lg p-2">PayStack</label>
          </span>
          <span className="mr-16">
            <InputField type="checkbox" />
            <label className="text-lg p-2">Credit Card</label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoDSettings;
