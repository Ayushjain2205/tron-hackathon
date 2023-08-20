import React, { useState } from "react";
import Layout from "../components/UI/Layout";
import SidePanel from "../components/UI/SidePanel";
import Template from "../components/UI/Template";
import Loader from "../components/Custom/Loader";
import responseIntro from "../data/response_intro";

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

  const getResponseIntroText = (text) => {
    const foundItem = responseIntro.find((item) => item[text]);
    return foundItem ? foundItem[text] : null;
  };

  const fetchAndProcessResponse = async () => {
    setIsLoading(true);
    // Execute fetch
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
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      fetchAndProcessResponse();
    }
  };
  return (
    <Layout theme="chat">
      <div className="flex flex-row gap-[228px] min-h-[852px] pt-[40px] text-[#D1D2D3]">
        <div className="flex flex-col w-[878px]">
          <div className="relative w-[878px] h-[54px] mb-[24px]">
            <input
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              type="text"
              className="w-full h-full overflow-y-auto resize-none bg-transparent border-b-2 border-[#F1F1F1] focus:outline-none text-[32px] font-medium pr-10"
              placeholder="What may I do for you?"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className="absolute top-1/2 transform -translate-y-1/2 right-1 cursor-pointer"
              onClick={fetchAndProcessResponse}
            >
              <path
                d="M7.5 18H28.5"
                stroke="#D1D2D3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 7.5L28.5 18L18 28.5"
                stroke="#D1D2D3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
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
