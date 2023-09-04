import React, { useContext, useState } from "react";
import TemplateHolder from "../UI/TemplateHolder";
import { CopyBlock, dracula } from "react-code-blocks";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";
import steps from "../../data/StepData";
import getColor from "../../utils/getColor";
import getTextColor from "../../utils/getTextColor";

const Guide = () => {
  const { ecosystem } = useContext(EcoSystemContext);

  const bgColor = getColor();
  const textColor = getTextColor();

  const [showSteps, setShowSteps] = useState(false);

  const [currentStep, setCurrentStep] = useState(0);

  const [showProject, setShowProject] = useState(false);

  const address = useAddress();

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <TemplateHolder title="Guide">
      <div className="w-[806px]">
        {!showSteps ? (
          <div className="setup flex flex-col gap-[32px] min-h-[443px]">
            <div className="flex flex-col">
              <div className="flex flex-row gap-[16px] items-center">
                <div
                  style={{
                    backgroundColor: bgColor,
                    color: textColor,
                  }}
                  className="flex flex-row items-center justify-center h-[63px] w-[63px] rounded-full text-[28px] font-bold"
                >
                  1
                </div>
                <p className="text-[28px] font-bold">
                  Let’s connect your wallet{" "}
                </p>
              </div>
              <div className="ml-[79px]">
                <ConnectWallet className="connect-wallet-button" />
              </div>
            </div>
            {address && (
              <div
                className="flex flex-col"
                onClick={() => setShowProject(true)}
              >
                <div className="flex flex-row gap-[16px] items-center">
                  <div
                    style={{
                      backgroundColor: bgColor,
                      color: textColor,
                    }}
                    className="flex flex-row items-center justify-center h-[63px] w-[63px] rounded-full text-[28px] font-bold "
                  >
                    2
                  </div>
                  <p className="text-[28px] font-bold">
                    You need to BRIDGE funds{" "}
                  </p>
                </div>
                <div className="ml-[79px]">
                  <a
                    href="https://opbnb-testnet-bridge.bnbchain.org/deposit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="connect-wallet-button flex flex-row justify-center items-center">
                      Bridge funds
                    </div>
                  </a>
                </div>
              </div>
            )}
            {address && showProject && (
              <div
                onClick={() => setShowSteps(true)}
                className="flex flex-row gap-[16px] items-center cursor-pointer"
              >
                <div
                  style={{
                    backgroundColor: bgColor,
                    color: textColor,
                  }}
                  className="flex flex-row items-center justify-center h-[63px] w-[63px] rounded-full text-[28px] font-bold ]"
                >
                  3
                </div>
                <p className="text-[28px] font-bold">
                  Let’s create a project now
                </p>
                <img src="/images/arrow.svg" alt="" />
              </div>
            )}
          </div>
        ) : (
          <div className="steps flex flex-col gap-[24px] min-h-[443px]">
            <p className="title text-[24px] font-bold">
              {steps[currentStep].title}
            </p>
            <p className="content text-[24px] leading-[28px]">
              {steps[currentStep].content}
            </p>
            <div className="max-h-[214px] overflow-scroll">
              <CopyBlock
                language="js"
                text={steps[currentStep].code}
                codeBlock
                theme={dracula}
                showLineNumbers={false}
              />
            </div>
          </div>
        )}

        <div className="flex flex-row mt-[48px] justify-between items-center">
          <img
            className="h-[36px] w-[36px]"
            src={`/logos/${ecosystem}.svg`}
            alt=""
          />
          {showSteps && (
            <button
              onClick={goToNextStep}
              className="w-[246px] h-[60px] text-white font-bold text-[20px] rounded-[8px] bg-[#262626]"
            >
              NEXT
            </button>
          )}
        </div>
      </div>
    </TemplateHolder>
  );
};

export default Guide;
