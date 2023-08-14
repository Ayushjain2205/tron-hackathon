import React, { useState, useRef, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";
import { useSwitchChain } from "@thirdweb-dev/react";
import {
  ModeTestnet,
  OptimismGoerli,
  ZoraTestnet,
  BaseGoerli,
} from "@thirdweb-dev/chains";

const EcoSelect = () => {
  const [selectedImage, setSelectedImage] = useState("/logos/optimism.svg");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [lineColor, setLineColor] = useState("#ffffff");

  const { setEcosystem } = useContext(EcoSystemContext);

  const switchChain = useSwitchChain();

  const handleChange = (image, ecosystemName) => {
    setSelectedImage(image);
    setEcosystem(ecosystemName);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);

    // Set color based on pathname
    if (pathname === "/agent") {
      setLineColor("#454545");
    } else {
      setLineColor("#ffffff");
    }
  }, [pathname]);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex flex-row items-center gap-[4px] h-[60px] w-[100px] bg-transparent border-b focus:outline-none px-[12px]`}
        style={{ borderColor: lineColor }}
      >
        <img src={selectedImage} alt="Selected" className="w-[48px] h-[48px]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke={lineColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <ul
          ref={dropdownRef}
          className="z-50 flex flex-col absolute w-[100px] items-center  border border-[#4E4C4C] rounded-[10px] bg-[#454545] mt-[12px] shadow-lg"
        >
          <li className="flex flex-row justify-center items-center cursor-pointer border-b-2 border-[#4E4C4C] w-full h-[60px] ">
            <button
              onClick={() => {
                handleChange("/logos/optimism.svg", "optimism");
                switchChain(OptimismGoerli.chainId);
              }}
            >
              <img
                src="/logos/optimism.svg"
                alt="Option 1"
                className="w-[48px] h-[48px]"
              />
            </button>
          </li>
          <li className="flex flex-row justify-center items-center cursor-pointer border-b-2 border-[#4E4C4C] w-full h-[60px] ">
            <button
              onClick={() => {
                handleChange("/logos/base.svg", "base");
                switchChain(BaseGoerli.chainId);
              }}
            >
              <img
                src="/logos/base.svg"
                alt="Option 2"
                className="w-[48px] h-[48px]"
              />
            </button>
          </li>
          <li className="flex flex-row justify-center items-center cursor-pointer border-b-2 border-[#4E4C4C] w-full h-[60px]">
            <button
              onClick={() => {
                handleChange("/logos/zora.svg", "zora");
                switchChain(ZoraTestnet.chainId);
              }}
            >
              <img
                src="/logos/zora.svg"
                alt="Option 3"
                className="w-[48px] h-[48px]"
              />
            </button>
          </li>
          <li className="flex flex-row justify-center items-center cursor-pointer w-full h-[60px]">
            <button
              onClick={() => {
                handleChange("/logos/mode.svg", "mode");
                switchChain(ModeTestnet.chainId);
              }}
            >
              <img
                src="/logos/mode.svg"
                alt="Option 4"
                className="w-[48px] h-[48px]"
              />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default EcoSelect;
