import React, { useContext } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";

const TemplateHolder = ({ title, children }) => {
  const { ecosystem } = useContext(EcoSystemContext);

  const colors = {
    ethereum: { border: "#627EEA", bg: "#627EEA", text: "black" },
    linea: { border: "#62DFFF", bg: "#62DFFF", text: "white" },
    polygon: { border: "#8a46ff", bg: "#8a46ff", text: "white" },
    optimism: { border: "#fff", bg: "#FF0420", text: "white" },
  };

  return (
    <div className="rounded-[18px] bg-[#f9f9f9] min-h-[200px] w-fit shadow-NFT">
      <div
        style={{ backgroundColor: colors[ecosystem].bg }}
        className={`h-[60px] flex flex-row justify-between items-center p-[16px] rounded-t-[18px] text-[20px]`}
      >
        <p
          style={{ color: colors[ecosystem].text }}
          className="text-[28px] font-bold"
        >
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
      <div className="flex flex-col p-[16px] pt-[24px] text-black">
        {children}
      </div>
    </div>
  );
};

export default TemplateHolder;
