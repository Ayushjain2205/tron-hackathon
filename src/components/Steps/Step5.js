import React from "react";
import Loader from "../Custom/Loader";

const Step5 = () => {
  return (
    <div className="flex flex-col h-[539px] gap-[24px] items-center justify-center">
      <Loader />
      <p className="w-[373px] text-[24px] text-center">
        Minting of NFT was successful
      </p>
      <a
        className="text-[#1A64BC] underline"
        target="_blank"
        rel="noreferrer"
        href="https://goerli.lineascan.build/tx/0xa844a76c9e61e01efdaa8aec5193e4a7efa124d083c8384b9a1a71728a0784d0"
      >
        View on block explorer
      </a>
    </div>
  );
};

export default Step5;
