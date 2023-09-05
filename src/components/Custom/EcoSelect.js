import React, { useState, useRef, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";
import { useSwitchChain } from "@thirdweb-dev/react";
import { Binance, BinanceTestnet, Opbnb, Ethereum } from "@thirdweb-dev/chains";

const EcoSelect = () => {
  const { setEcosystem, ecosystem } = useContext(EcoSystemContext);

  const [selectedImage, setSelectedImage] = useState(`/logos/${ecosystem}.svg`);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [lineColor, setLineColor] = useState("#ffffff");

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
          className="z-50 flex flex-col absolute w-[100px] items-center border border-[#4E4C4C] rounded-[10px] bg-[#454545] mt-[12px] shadow-lg"
        >
          <li className="flex flex-row justify-center items-center cursor-pointer border-b-2 border-[#4E4C4C] w-full h-[60px] relative group">
            <button
              onClick={() => {
                handleChange("/logos/bnb.svg", "bnb");
                switchChain(BinanceTestnet.chainId);
              }}
            >
              <img
                src="/logos/bnb.svg"
                alt="Option 2"
                className="w-[48px] h-[48px]"
              />
            </button>
            <div className="hidden group-hover:block absolute bg-black text-white text-xs rounded-md p-1 right-0 top-1/2 translate-y-[-50%] mr-[75px]">
              BNB
            </div>
          </li>
          <li className="flex flex-row justify-center items-center cursor-pointer w-full h-[60px] relative group">
            <button
              onClick={() => {
                handleChange("/logos/greenfield.svg", "greenfield");
              }}
            >
              <img
                src="/logos/greenfield.svg"
                alt="Option 4"
                className="w-[48px] h-[48px]"
              />
            </button>
            <div className="hidden group-hover:block absolute bg-black text-white text-xs rounded-md p-1 right-0 top-1/2 translate-y-[-50%] mr-[75px]">
              Greenfield
            </div>
          </li>
          <li className="flex flex-row justify-center items-center cursor-pointer w-full h-[60px] relative group">
            <button
              onClick={() => {
                handleChange("/logos/opbnb.svg", "opbnb");
                switchChain(Opbnb.chainId);
              }}
            >
              <img
                src="/logos/opbnb.svg"
                alt="Option 3"
                className="w-[48px] h-[48px]"
              />
            </button>
            <div className="hidden group-hover:block absolute bg-black text-white text-xs rounded-md p-1 right-0 top-1/2 translate-y-[-50%] mr-[75px]">
              OpBNB
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default EcoSelect;
