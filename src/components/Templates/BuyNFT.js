import React, { useContext } from "react";
import TemplateHolder from "../UI/TemplateHolder";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const BuyNFT = () => {
  const { ecosystem } = useContext(EcoSystemContext);
  return (
    <div>
      <TemplateHolder title="Buy NFT">
        <div className="grid grid-cols-3 gap-[7px] h-[452px] overflow-scroll hide-scrollbar bg-[#f8f8f8]">
          <div className="flex flex-col rounded-[8px] w-[275px] gap-[6px] min-h-[300px] bg-[#fff] p-[8px]">
            <img
              className="w-[259px] h-[224px] rounded-[8px]"
              src="https://i.seadn.io/gcs/files/fd7fb6f7a510ef9746332776af07713a.jpg?auto=format&dpr=1&w=1000"
              alt=""
            />
            <p className="flex justify-between items-center text-[18px] font-bold">
              Entropy_Squad_1
            </p>
            <p className="flex flex-row gap-[8px] items-center text-[12px]">
              <img
                className="h-[16px]"
                src={`/logos/${ecosystem}.svg`}
                alt=""
              />
              <span className="text-[18px] ">0.01 ETH</span>
            </p>
          </div>
          <div className="flex flex-col rounded-[8px] w-[275px] gap-[6px] min-h-[300px] bg-[#fff] p-[8px]">
            <img
              className="w-[259px] h-[224px] rounded-[8px]"
              src="https://i.seadn.io/gcs/files/6306325c8d4f2f084610e85f88efe387.jpg?auto=format&dpr=1&w=1000"
              alt=""
            />
            <p className="flex justify-between items-center text-[18px] font-bold">
              Entropy_Squad_1
            </p>
            <p className="flex flex-row gap-[8px] items-center text-[12px]">
              <img
                className="h-[16px]"
                src={`/logos/${ecosystem}.svg`}
                alt=""
              />
              <span className="text-[18px] ">0.01 ETH</span>
            </p>
          </div>
          <div className="flex flex-col rounded-[8px] w-[275px] gap-[8px] min-h-[300px] bg-[#fff] p-[8px]">
            <img
              className="w-[259px] h-[224px] rounded-[8px]"
              src="https://i.seadn.io/gcs/files/b6d40f582015cdad01984aacfb1ffbe7.jpg?auto=format&dpr=1&w=1000"
              alt=""
            />
            <p className="flex justify-between items-center text-[18px] font-bold">
              Entropy_Squad_1
            </p>
            <p className="flex flex-row gap-[8px] items-center text-[12px]">
              <img
                className="h-[16px]"
                src={`/logos/${ecosystem}.svg`}
                alt=""
              />
              <span className="text-[18px] ">0.01 ETH</span>
            </p>
          </div>
          <div className="flex flex-col rounded-[8px] w-[275px] gap-[8px] min-h-[300px] bg-[#fff] p-[8px]">
            <img
              className="w-[259px] h-[224px] rounded-[8px]"
              src="https://i.seadn.io/gcs/files/f5945cfbd75e7909c8dbbd3d9a15132c.jpg?auto=format&dpr=1&w=1000"
              alt=""
            />
            <p className="flex justify-between items-center text-[18px] font-bold">
              Entropy_Squad_1
            </p>
            <p className="flex flex-row gap-[8px] items-center text-[12px]">
              <img
                className="h-[16px]"
                src={`/logos/${ecosystem}.svg`}
                alt=""
              />
              <span className="text-[18px] ">0.01 ETH</span>
            </p>
          </div>
          <div className="flex flex-col rounded-[8px] w-[275px] gap-[8px] min-h-[300px] bg-[#fff] p-[8px]">
            <img
              className="w-[259px] h-[224px] rounded-[8px]"
              src="https://i.seadn.io/gcs/files/125c94c5c1bc58f9797feb723f2cc451.jpg?auto=format&dpr=1&w=1000"
              alt=""
            />
            <p className="flex justify-between items-center text-[18px] font-bold">
              Entropy_Squad_1
            </p>
            <p className="flex flex-row gap-[8px] items-center text-[12px]">
              <img
                className="h-[16px]"
                src={`/logos/${ecosystem}.svg`}
                alt=""
              />
              <span className="text-[18px] ">0.01 ETH</span>
            </p>
          </div>
          <div className="flex flex-col rounded-[8px] w-[275px] gap-[8px] min-h-[300px] bg-[#fff] p-[8px]">
            <img
              className="w-[259px] h-[224px] rounded-[8px]"
              src="https://i.seadn.io/gcs/files/c8d0dc4e957ed3e554cbe108329475bb.jpg?auto=format&dpr=1&w=1000"
              alt=""
            />
            <p className="flex justify-between items-center text-[18px] font-bold">
              Entropy_Squad_1
            </p>
            <p className="flex flex-row gap-[8px] items-center text-[12px]">
              <img
                className="h-[16px]"
                src={`/logos/${ecosystem}.svg`}
                alt=""
              />
              <span className="text-[18px] ">0.01 ETH</span>
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full h-[80px] bg-[#f8f8f8] rounded-b-[15px] items-center justify-between">
          <img
            className="h-[36px] w-[36px]"
            src={`/logos/${ecosystem}.svg`}
            alt=""
          />
          <button className=" w-[195px] h-[60px] rounded-[8px] bg-[#262626] text-white text-[20px] font-bold ">
            BUY
          </button>
        </div>
      </TemplateHolder>
    </div>
  );
};

export default BuyNFT;
