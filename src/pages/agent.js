import React, { useState } from "react";
import Layout from "../components/UI/Layout";
import SidePanel from "../components/UI/SidePanel";
import Template from "../components/UI/Template";
import Loader from "../components/Custom/Loader";

const chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseText, setResponseText] = useState("");

  const [outputContent, setOutputContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const setOutput = (template) => {
    const newContent = <Template template={template} />;
    setOutputContent(newContent);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const responseIntro = [
    {
      mintNFT:
        "Sure I can help you mint an NFT. You can generate it using AI, doesn't that sound fun?",
    },
    {
      smartContract:
        "Yes, I can help you deploy a smart contract. Just 3 clicks away!",
    },
    {
      guide:
        "I think breaking complex things down into byte sized chunks is the best way to learn. Here you go:",
    },
    {
      none: "Sorry, I don't understand. Please try again.",
    },
  ];

  const getResponseIntroText = (text) => {
    const foundItem = responseIntro.find((item) => item[text]);
    return foundItem ? foundItem[text] : null;
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      // Execute fetch when Enter key is pressed
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: inputValue }),
      });
      const data = await response.json();
      console.log(data);
      setOutput(data.message);
      setResponseText(data.message);
      setIsLoading(false);
      console.log(responseIntro[responseText]);
    }
  };
  return (
    <Layout theme="chat">
      <div className="flex flex-row gap-[160px] min-h-[852px] pt-[40px] text-[#D1D2D3]">
        <div className="flex flex-col w-[878px]">
          <input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            type="text"
            className="w-[878px] h-[54px] overflow-y-auto resize-none bg-transparent border-b-2 border-[#F1F1F1] focus:outline-none text-[32px] font-medium mb-[24px]"
            placeholder="What may I do for you?"
            name=""
            id=""
          />
          <div className="output">
            {isLoading && (
              <div className="flex flex-row justify-center items-center">
                <Loader />
              </div>
            )}
            <p className="text-[24px] text-white h-[55px] mb-[16px] leading-[30px]">
              {getResponseIntroText(responseText)}
            </p>
            {outputContent}
          </div>
        </div>
        <SidePanel
          setInputValue={setInputValue}
          setResponseText={setResponseText}
          setOutputContent={setOutputContent}
        />
      </div>
    </Layout>
  );
};

export default chat;
