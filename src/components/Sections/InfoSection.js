// InfoSection.js
import React from "react";
import Colorpicker from "../Custom/ColorPicker";

const InfoSection = ({ handleNext }) => {
  const fileInputRef = React.useRef(null);

  return (
    <div className="flex flex-row mt-[58px] gap-[142px]">
      <div className="flex flex-col gap-[45px]">
        <p className="text-[32px]">About your project</p>

        <div className="relative flex flex-col gap-[24px] bg-[#f8f8f8] pt-[48px] px-[24px] rounded-[15px]">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black text-[24px] mb-[8px]">
                Name
              </span>
            </label>
            <input
              defaultValue="Entropy Squad💀"
              type="text"
              className="input bg-white rounded-[10px] w-[460px] h-[64px] focus:outline-none "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black text-[24px] mb-[8px]">
                Link
              </span>
            </label>
            <input
              defaultValue="https://testnets.opensea.io/collection/entropy-squad-1"
              type="text"
              className="input bg-white rounded-[10px] w-[460px] h-[64px] focus:outline-none "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black text-[24px] mb-[8px]">
                Upload your logo
              </span>
            </label>
            <div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <button
                className="w-[453px] h-[60px] border border-black rounded-[8px] flex items-center justify-center space-x-2 cursor-pointer"
                onClick={() => fileInputRef.current.click()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M21.5 15V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V15"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5 8L12.5 3L7.5 8"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 3V15"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                &nbsp; Attach image (jpeg,png)
              </button>
            </div>
          </div>
          <div className="form-control w-full mb-[120px]">
            <label className="label">
              <span className="label-text text-black text-[24px] mb-[8px]">
                Import theme
              </span>
            </label>
            <div className="flex flex-row gap-[10px]">
              <Colorpicker rgba="rgba(243,97,73,1)" />
              <Colorpicker rgba="rgba(252,185,0,1)" />
              <Colorpicker />
            </div>
          </div>
          <div
            className="absolute flex flex-row items-center justify-center bottom-0 left-0 right-0 w-full h-[60px] bg-[#699BF7] font-bold text-white text-[24px] rounded-[15px] cursor-pointer"
            onClick={handleNext}
          >
            CONFIRM
          </div>
        </div>
      </div>
      <div>
        <img src="/images/about.svg" alt="" />
      </div>
    </div>
  );
};

export default InfoSection;
