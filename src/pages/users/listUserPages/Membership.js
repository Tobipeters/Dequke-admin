import React from "react";
import Button from "../../../components/button/Button";
import TextField from "../../../components/TextField/TextField";

export default function Membership() {
  return (
    <div>
      <div className="intro-y box py-4">
        <div className="px-10">
          <div className="m-8">
            <TextField textTitle="Current Package" textBodyLine="Premium" />
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
}
