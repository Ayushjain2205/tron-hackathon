import React, { useState, useEffect } from "react";
import TemplateHolder from "../UI/TemplateHolder";
import Loader from "../Custom/Loader";

const SendMoney = () => {
  const [isConfirmClicked, setIsConfirmClicked] = useState(false);
  const [displayText, setDisplayText] = useState("Sending your details");
  const [isSendingComplete, setIsSendingComplete] = useState(false);

  const handleConfirmClick = () => {
    setIsConfirmClicked(true);
  };

  useEffect(() => {
    let intervalId;

    if (isConfirmClicked) {
      const texts = [
        "Thinking..",
        "Sending transaction details",
        "Verifying",
        "In the waiting room",
      ];
      let currentIndex = 0;

      intervalId = setInterval(() => {
        setDisplayText(texts[currentIndex]);
        currentIndex++;

        if (currentIndex === texts.length) {
          clearInterval(intervalId);
          setIsSendingComplete(true);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isConfirmClicked]);

  return (
    <div>
      <div className="flex flex-row gap-[16px]">
        <TemplateHolder title="Send Money">
          <input
            type="number"
            placeholder="0"
            className="bg-transparent h-[65px] w-[306px] text-[64px] text-center focus:outline-none text-black"
            name=""
            id=""
          />
          <span className=" text-center text-[24px] text-black font-bold">
            BNB
          </span>

          <div className="flex flex-col gap-[16px]">
            <div className="form-control w-[306px] ">
              <label className="label">
                <span className="label-text text-[16px] text-black">
                  To who?
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered border-[#DDD] rounded-[12px] w-full text-black"
                value="0x3cA0AaDc6bC7B2A4b303eDdDf2e5eBbB5fBbBbBb"
              />
            </div>

            <div className="form-control w-[306px] ">
              <label className="label">
                <span className="label-text text-[16px] text-black">
                  Any remarks?
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered border-[#DDD] rounded-[12px] w-full text-black"
              />
            </div>
          </div>

          <button
            className="rounded-[10px] w-[306px] h-[48px] text-[#fff] font-bold text-[16px] bg-[#262626] mt-[32px]"
            onClick={handleConfirmClick}
          >
            CONFIRM
          </button>
        </TemplateHolder>
        {isConfirmClicked && (
          <TemplateHolder title="Send Money">
            <div className="flex flex-col items-center gap-[16px] h-[365px] w-[306px]">
              <div className="flex flex-col items-center justify-between mt-[60px]">
                {!isSendingComplete ? (
                  <>
                    <Loader />
                    <p className="text-[16px] text-center text-black">
                      {displayText}
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col items-center">
                    <img src="/images/sent.svg" alt="" />
                    <span className="text-[24px] text-black mt-[16px]">
                      SENT!
                    </span>
                    <a
                      href="https://bscscan.com/tx/0xecb6b0972d09a9aaf6945babe584ac0227d044c1c6295a97dcdb210f560d1840"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[16px] text-[#007BFF] mt-[32px] underline"
                    >
                      View on Blockexplorer
                    </a>
                  </div>
                )}
              </div>
              {!isSendingComplete && (
                <button className="rounded-[10px] w-[306px] h-[48px] text-[#262626] font-bold text-[16px] mt-auto self-end">
                  CANCEL
                </button>
              )}
            </div>
          </TemplateHolder>
        )}
      </div>
    </div>
  );
};

export default SendMoney;
