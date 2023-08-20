import React from "react";
import TemplateHolder from "../UI/TemplateHolder";
import getColor from "../../utils/getColor";

const WalletHealth = () => {
  const bgColor = getColor();
  return (
    <div>
      <TemplateHolder title="About wallet">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-row  w-[700px] justify-between">
            <span className="text-black text-[20px]">Balance</span>
            <span className="font-bold text-[20px]" style={{ color: bgColor }}>
              70 ETH
            </span>
          </div>
          <div className="flex flex-row w-[700px] justify-between">
            <span className="text-black text-[20px]">Portfolio</span>
            <span className=" font-bold text-[20px]" style={{ color: bgColor }}>
              426 ETH
            </span>
          </div>
          <div className="flex flex-row w-[700px] justify-between">
            <span className="text-black text-[20px]">Health score</span>
            <span className="text-[#007BFF] font-bold text-[20px]">74/100</span>
          </div>
          <div className="flex flex-row w-[700px] justify-between">
            <span className="text-black text-[20px]">Exposure</span>
            <span className="text-[#007BFF] font-bold text-[20px]">
              False 👍
            </span>
          </div>
          <hr />
          <div className="collapse collapse-arrow border-b rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-[20px]">Top NFTs</div>
            <div className="collapse-content">
              <div className="flex flex-row gap-[16px] hide-scrollbar w-[700px] overflow-scroll">
                <img
                  className="h-[159px] w-[159px] rounded-[6px]"
                  src="https://i.seadn.io/gcs/files/fd7fb6f7a510ef9746332776af07713a.jpg?auto=format&dpr=1&w=1000"
                  alt=""
                />
                <img
                  className="h-[159px] w-[159px] rounded-[6px]"
                  src="https://i.seadn.io/gcs/files/fd7fb6f7a510ef9746332776af07713a.jpg?auto=format&dpr=1&w=1000"
                  alt=""
                />
                <img
                  className="h-[159px] w-[159px] rounded-[6px]"
                  src="https://i.seadn.io/gcs/files/fd7fb6f7a510ef9746332776af07713a.jpg?auto=format&dpr=1&w=1000"
                  alt=""
                />
                <img
                  className="h-[159px] w-[159px] rounded-[6px]"
                  src="https://i.seadn.io/gcs/files/fd7fb6f7a510ef9746332776af07713a.jpg?auto=format&dpr=1&w=1000"
                  alt=""
                />
                <img
                  className="h-[159px] w-[159px] rounded-[6px]"
                  src="https://i.seadn.io/gcs/files/fd7fb6f7a510ef9746332776af07713a.jpg?auto=format&dpr=1&w=1000"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow border-b rounded-none">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-[20px]">Warning</div>
            <div className="collapse-content flex flex-col gap-[14px]">
              <div className="flex flex-row justify-between alert alert-error rounded-[8px]">
                <span className="text-[16px] text-[#E53E3E] font-bold">
                  You have made UNLIMITED confirmations
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-white shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-row justify-between alert alert-error rounded-[8px]">
                <span className="text-[16px] font-bold">
                  You have made UNLIMITED confirmations.
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-white shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </TemplateHolder>
    </div>
  );
};

export default WalletHealth;
