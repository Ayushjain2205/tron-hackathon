import React, { useState, useContext } from "react";
import TemplateHolder from "../UI/TemplateHolder";
import Loader from "../Custom/Loader";
import { Web3Button } from "@thirdweb-dev/react";
import EcoIcon from "../Custom/EcoIcon";

const Create = () => {
  const [prompt, setPrompt] = useState(
    "UK countryside street on a sunny afternoon"
  );

  const [isGenerated, setIsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const handleGenerate = () => {
  //   setIsGenerated(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // };

  const handleGenerate = async () => {
    setIsGenerated(true);

    // Get the value of the prompt. I'm not sure where you get this from in your code,
    // so I'm just putting a placeholder here. Adjust accordingly.
    const promptValue = prompt;

    try {
      // Assuming your API route is hosted at '/api/your-route-name'
      const response = await fetch("/api/predictions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: promptValue,
        }),
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();

      console.log("API Response:", data);
    } catch (error) {
      console.error("Error fetching API:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <TemplateHolder title="Create NFT">
      {!isGenerated ? (
        <div className="h-[525px]">
          <p className="text-[20px] text-black text-opacity-90 mb-[8px]">
            Prompt
          </p>
          <div className="w-[545px] h-[60px] bg-[#fff] rounded-[10px] flex flex-row items-center p-[14px] pl-[16px]">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter a prompt to generate image here"
              className="w-[450px] h-[20px] text-[16px] focus:outline-none text-[#26262690] bg-[#fff]"
              name=""
              id=""
            />
          </div>
          <p className="text-[20px] text-black text-opacity-90 mt-[24px] mb-[8px]">
            Price
          </p>
          <div className="w-[545px] h-[60px] bg-[#fff] rounded-[10px] flex flex-row items-center p-[14px] pl-[16px]">
            <input
              type="text"
              value="0.01"
              className="w-[450px] h-[20px] text-[16px] focus:outline-none text-[#26262690]  bg-[#fff]"
              name=""
              id=""
            />
          </div>
          <p className="text-[20px] text-black text-opacity-90 mb-[8px] mt-[24px]">
            Select chain
          </p>
          <div>
            <select className="select select-bordered border-[#fff] bg-[#fff] rounded-[12px] w-[545px] h-[60px] text-black font-normal text-[16px] focus:outline-none">
              <option selected>Optimism</option>
              <option>Base</option>
              <option>Zora</option>
            </select>
          </div>
          <div className="flex flex-row justify-between items-center  mt-[105px]">
            <EcoIcon />
            <button
              className="w-[195px] h-[60px] bg-[#262626] text-white rounded-[8px] font-bold "
              onClick={handleGenerate}
            >
              GENERATE
            </button>
          </div>
        </div>
      ) : (
        <div className="h-[525px]">
          <p className="text-[20px] text-black text-opacity-40 mb-[8px]">
            Prompt
          </p>
          <div className="w-[545px]">
            <div className="flex flex-row justify-between ">
              <p className="text-[16px] text-[#262626]">{prompt}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="cursor-pointer"
              >
                <path
                  d="M1 4V10H7"
                  stroke="#B0B0B0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 20V14H17"
                  stroke="#B0B0B0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.49 8.99959C19.9828 7.56637 19.1209 6.28499 17.9845 5.27501C16.8482 4.26502 15.4745 3.55935 13.9917 3.22385C12.5089 2.88834 10.9652 2.93393 9.50481 3.35636C8.04437 3.77879 6.71475 4.5643 5.64 5.63959L1 9.99959M23 13.9996L18.36 18.3596C17.2853 19.4349 15.9556 20.2204 14.4952 20.6428C13.0348 21.0652 11.4911 21.1108 10.0083 20.7753C8.52547 20.4398 7.1518 19.7342 6.01547 18.7242C4.87913 17.7142 4.01717 16.4328 3.51 14.9996"
                  stroke="#B0B0B0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-[400px]">
                <Loader />
              </div>
            ) : (
              <div className="flex flex-col justify-between h-[450px] py-[24px] ">
                <div className="flex flex-col ">
                  <img
                    className="h-[274px] w-[544px]"
                    src="/images/nft.png"
                    alt=""
                  />
                  <p className="text-[20px] font-bold text-[#262626]">
                    London Scene
                  </p>
                  <p className="flex flex-row gap-[8px] items-center text-[12px]">
                    <img
                      className="h-[16px]"
                      src="/logos/ethereum.svg"
                      alt=""
                    />
                    <span className="text-[18px] ">0.01 ETH</span>
                  </p>
                  <div className="flex flex-row justify-between items-center  mt-[38px]">
                    <EcoIcon />
                    <Web3Button
                      contractAddress="0x50b21C8eCA540a92A1b07F18548cAd197Cad73Dc"
                      action={(contract) => contract.erc1155.claim(0, 1)}
                      className="connect-wallet-button mint-button"
                    >
                      MINT
                    </Web3Button>
                    {/* <button
                      className="w-[195px] h-[60px] bg-[#262626] text-white rounded-[8px] font-bold"
                      onClick={handleGenerate}
                    >
                      MINT
                    </button> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </TemplateHolder>
  );
};

export default Create;
