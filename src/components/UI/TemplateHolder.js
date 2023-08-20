import React, { useContext } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";
import colors from "../../data/colors";

const TemplateHolder = ({ title, children }) => {
  const { ecosystem } = useContext(EcoSystemContext);

  return (
    <div className="rounded-[18px] bg-[#f9f9f9] min-h-[200px] w-fit shadow-NFT">
      <div
        style={{ backgroundColor: colors[ecosystem].bg }}
        className={`h-[60px] flex flex-row justify-between items-center p-[16px] rounded-t-[18px] text-[20px]`}
      >
        <p style={{ color: colors[ecosystem].text }} className="text-[24px] ">
          {title}
        </p>
        <img
          style={{
            filter:
              colors[ecosystem].text === "black" ? "invert(100%)" : "none",
          }}
          className="h-[24px] cursor-pointer grayscale"
          src="/plus.svg"
          alt=""
        />
      </div>
      <div className="flex flex-col p-[24px] text-black">{children}</div>
    </div>
  );
};

export default TemplateHolder;
