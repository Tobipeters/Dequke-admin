import React, { useState } from "react";
import * as Icon from "react-feather";
import IconButton from "@material-ui/core/IconButton";

const VerifyModal = ({ show, handleClose }) => {
  let [close, setClose] = useState(false);
  const styles = {
    marginTop: "0px",
    marginLeft: "0px",
    paddingLeft: "150px",
    paddingTop: "20px",
    zIndex: 51,
  };

  return (
    <div>
      <div
        className={show && !close ? "modal overflow-y-auto show" : "modal"}
        style={show && !close ? styles : {}}
        id="header-footer-modal-preview"
      >
        <div class="modal__content">
          <div class="flex items-center px-5 py-5 sm:py-3 border-b-2 border-gray-300">
            <h2 class="text-base text-gray-500 mr-auto">Verification</h2>
            <div class="items-center text-gray-700 hidden sm:flex">
              <IconButton
                aria-label="upload picture"
                component="span"
                style={{ paddingTop: 0, paddingBottom: 0 }}
                onClick={handleClose}
              >
                <Icon.XCircle className="w-4 h-4 text-red-600 cursor-pointer" />
              </IconButton>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 row-gap-5 my-8">
            <div className="intro-y col-span-12 sm:col-span-3 mr-4">
              <div className="text-black mx-5 text-lg">Documents</div>
            </div>
            <div className="intro-y flex justify-end col-span-12 sm:col-span-9 mr-4">
              <div class="">
                <div class="inline-block w-64 text-gray-700 text-center bg-gray-400 h-40 mr-2 image-fit">
                  1
                </div>
                <div class="inline-block w-64 text-gray-700 text-center bg-gray-400 h-40 m-2 image-fit">
                  2
                </div>
              </div>
            </div>
          </div>

          <div class="px-5 py-3 flex justify-end text-right border-t border-gray-200">
            <button class="w-32 py-3 mr-2 mb-2 flex items-center justify-center bg-theme-1 text-white">
              <Icon.XCircle class="w-4 h-4 mr-2" /> Decline
            </button>
            <button class="w-32 mr-2 py-3 mb-2 flex items-center justify-center bg-green-600 text-white">
              <Icon.CheckCircle class="w-4 h-4 mr-2" /> Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyModal;
