import React, { useContext, useState } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";
import { useSigner } from "@thirdweb-dev/react";
import TemplateHolder from "../UI/TemplateHolder";
import DeployButton from "../Buttons/DeployButton";
import contract_templates from "../../data/contract_data";

const InputField = ({ label, value }) => (
  <div className="flex flex-col mb-[8px]">
    <p className="text-[16px] text-black text-opacity-90 mb-[8px]">{label}</p>
    <div className="w-[379px] h-[40px] bg-white rounded-[10px] flex flex-row items-center p-[14px] pl-[16px]">
      <input
        type="text"
        value={value}
        className="w-[450px] h-[20px] text-[16px] focus:outline-none text-[#26262690] bg-[#fff]"
      />
    </div>
  </div>
);

const TextAreaField = ({ label, value }) => (
  <div className="flex flex-col mb-[8px]">
    <p className="text-[16px] text-black text-opacity-90 mb-[8px]">{label}</p>
    <div className="w-[379px] h-[68px] bg-white rounded-[10px] flex flex-row items-center p-[14px] pl-[16px]">
      <textarea
        value={value}
        className="w-[450px] h-[68px] text-[16px] focus:outline-none text-[#26262690] bg-[#fff]"
      />
    </div>
  </div>
);

const Deploy = () => {
  const { ecosystem } = useContext(EcoSystemContext);
  const [showDrop, setShowDrop] = useState(false);
  const [isSigned, setIsSigned] = useState(false);

  const [imageName, setImageName] = useState("My Art NFT");
  const [imageDescription, setImageDescription] = useState(
    "A tokenized representation of the Starry Night painting."
  );
  const [symbol, setSymbol] = useState("MAT");
  const [recipientAddress, setRecipientAddress] = useState(
    "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0"
  );
  const [percentage, setPercentage] = useState("10%");

  const signer = useSigner();

  const signMessage = async () => {
    const message = `Name: ${imageName}, Description: ${imageDescription}, Symbol: ${symbol}, Recipient Address: ${recipientAddress}, Percentage: ${percentage}`;
    try {
      const signature = await signer.signMessage(message);
      setIsSigned(true);
    } catch (err) {
      console.error("Error signing the message:", err);
    }
  };

  return (
    <TemplateHolder title="Deploy smart contract">
      {!showDrop ? (
        <div className="choose">
          <p className="text-[24px]">Choose a smart contract</p>
          <div className="grid grid-cols-3 gap-4 mt-[24px]">
            {contract_templates.map((card, index) => (
              <div
                key={index}
                className="flex flex-col p-[16px] w-[258px] h-[175px] bg-white rounded-[10px] cursor-pointer"
                onClick={() => setShowDrop(true)}
              >
                <div className="flex flex-row gap-[8px] mb-[4px]">
                  <img src="/images/check-circle.svg" alt="" />
                  <p className="text-[12px]">Audited</p>
                </div>
                <p className="text-[20px] font-bold mb-[12px]">{card.title}</p>
                <p className="w-[223px] text-[16px] mb-[21px] leading-[21px]">
                  {card.text}
                </p>
                <p className="text-[14px] text-[#CAC7C7]">thirdweb.eth</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="drop">
          <p className="text-[24px] font-bold">NFT Drop</p>
          <div className="flex flex-row gap-[24px] mt-[24px]">
            <div className="flex flex-col">
              <p className="text-[16px] text-black text-opacity-90 mb-[8px]">
                Upload an image
              </p>
              <div className="w-[379px] h-[117px] bg-white rounded-[10px] flex flex-row items-center justify-center p-[14px] pl-[16px] mb-[8px]">
                <img src="/images/upload.svg" alt="" />
              </div>
              <InputField label="Name" value={imageName} />
              <TextAreaField label="Description" value={imageDescription} />
            </div>
            <div className="flex flex-col">
              <InputField label="Symbol" value={symbol} />
              <InputField label="Recipient address" value={recipientAddress} />
              <InputField label="Percentage" value={percentage} />
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-row mt-[25px] justify-between">
        <img
          className="h-[36px] w-[36px]"
          src={`/logos/${ecosystem}.svg`}
          alt=""
        />
        {showDrop && (
          <>
            {!isSigned ? (
              <button
                className="w-[246px] h-[60px] text-white font-bold text-[20px] rounded-[8px] bg-[#262626]"
                onClick={signMessage}
              >
                CONFIRM
              </button>
            ) : (
              <DeployButton />
            )}
          </>
        )}
      </div>
    </TemplateHolder>
  );
};

export default Deploy;
