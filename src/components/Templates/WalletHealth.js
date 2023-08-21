import React, { useState, useEffect } from "react";
import TemplateHolder from "../UI/TemplateHolder";
import getColor from "../../utils/getColor";
import Loader from "../Custom/Loader";

const WalletHealth = () => {
  const bgColor = getColor();
  const [isLoading, setIsLoading] = useState(true); // to control the loader display
  const [loadingText, setLoadingText] = useState("Fetching wallet details..."); // loading text to be displayed

  useEffect(() => {
    const loadingTexts = [
      "Scanning Wallet...",
      "Fetching Transactions...",
      "Checking exposure...",
      "Checking exposure...",
    ];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setLoadingText(loadingTexts[currentIndex]);
      currentIndex++;

      if (currentIndex === loadingTexts.length) {
        clearInterval(intervalId);
        setIsLoading(false); // stop loading after all texts have been shown
      }
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <TemplateHolder title="About wallet">
        <div className="flex flex-col gap-[16px] h-[489px] w-[716px]">
          {!isLoading ? (
            <>
              <div className="flex flex-row  w-[700px] justify-between">
                <span className="text-black text-[20px]">Balance</span>
                <span
                  className="font-bold text-[20px]"
                  style={{ color: bgColor }}
                >
                  70 ETH
                </span>
              </div>
              <div className="flex flex-row w-[700px] justify-between">
                <span className="text-black text-[20px]">Portfolio</span>
                <span
                  className=" font-bold text-[20px]"
                  style={{ color: bgColor }}
                >
                  426 ETH
                </span>
              </div>
              <div className="flex flex-row w-[700px] justify-between">
                <span className="text-black text-[20px]">Health score</span>
                <span className="text-[#007BFF] font-bold text-[20px]">
                  74/100
                </span>
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
                <div className="collapse-title text-[20px] pl-0">Top NFTs</div>
                <div className="collapse-content pl-0">
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
                <div className="collapse-title text-[20px] pl-0">Warning</div>
                <div className="collapse-content pl-0 flex flex-col gap-[14px]">
                  <a
                    href="https://revoke.cash/address/0xCafa93E9985793E2475bD58B9215c21Dbd421fD0?chainId=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-row justify-between alert alert-error rounded-[8px]">
                      <span className="text-[16px] text-white font-bold">
                        You have UNLIMITED USDC spend approoved to Permit2
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
                  </a>
                  <a
                    href="https://revoke.cash/address/0xCafa93E9985793E2475bD58B9215c21Dbd421fD0?chainId=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-row justify-between alert alert-error rounded-[8px]">
                      <span className="text-[16px] text-white font-bold">
                        You have UNLIMITED MATIC spend approoved to Matic Bridge
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
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-[400px]">
              <Loader />
              <p className="text-[16px] text-center text-black">
                {loadingText}
              </p>
            </div>
          )}
        </div>
      </TemplateHolder>
    </div>
  );
};

export default WalletHealth;
